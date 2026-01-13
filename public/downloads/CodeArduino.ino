#include <VGAX.h>

VGAX vga;

unsigned long t = 0; 
int xPos = 0;
int lastY = VGAX_HEIGHT / 2; 

// --- VARIABLES DE CONTROLE ---
unsigned long visualPhase = 0; 
int rotationSpeed = 0;         

int manualAngle = 0;          

void setup() {
  vga.begin();
  vga.clear(0); 
}

void loop() {
  // 0. LECTURE DES POTENTIOMETRES (Au début de la ligne)
  if (xPos == 0) {
    // --- POTENTIOMETRE 1 : VITESSE AUTO (A0) ---
    int pot1 = analogRead(A0); 
    rotationSpeed = map(pot1, 0, 1023, 0, 2000); 
    visualPhase += rotationSpeed;

    // --- POTENTIOMETRE 2 : ROTATION MANUELLE (A1) ---
    int pot2 = analogRead(A1);
    
    manualAngle = map(pot2, 0, 1023, 0, 2048);
  }
  else {
     if (rotationSpeed > 0) visualPhase += (rotationSpeed / 120);
  }

  // 1. AUDIO (Inchangé)
  uint8_t audioValue = (t * (t >> 5 | t >> 8)) >> (t >> 16);
  
  // 2. MAPPING
  int currentY = VGAX_HEIGHT - 1 - map(audioValue, 0, 255, 0, VGAX_HEIGHT - 1);

  // 3. DESSIN DU FOND : SPIRALE
  int dx = xPos - (VGAX_WIDTH / 2); 
  
  // --- CALCUL DE LA ROTATION TOTALE ---
  byte totalRotation = (byte)((visualPhase >> 5) + manualAngle);

  for (int y = 0; y < VGAX_HEIGHT; y++) {
    uint8_t pixelColor = 0; 
    int dy = y - (VGAX_HEIGHT / 2);

    // Formule de la spirale
    unsigned int spiral = ((dx * dx + dy * dy) >> 5) + ((dx * dy) >> 5) + totalRotation;

    // Masquage
    if (spiral & 4) { 
       pixelColor = 1; 
    }

    vga.putpixel(xPos, y, pixelColor);
  }

  // 4. DESSIN DE LA FORME D'ONDE
  int startY = min(lastY, currentY);
  int endY = max(lastY, currentY);

  for (int y = startY; y <= endY; y++) {
      vga.putpixel(xPos, y, 3); 
  }
  if(abs(currentY - lastY) > 1) vga.putpixel(xPos, currentY, 3);

  // 5. MISE A JOUR
  lastY = currentY; 
  t++;
  xPos++;
  
  if (xPos >= VGAX_WIDTH) {
    xPos = 0;
  }
}