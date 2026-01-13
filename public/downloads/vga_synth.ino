/*
  VGA Synth & ByteBeat Generator
  Platform: Arduino Uno (ATmega328p)
  Dependencies: VGAX Library
*/

#include <VGAX.h>

VGAX vga;
unsigned long t = 0;

void setup() {
  vga.begin();
}

void loop() {
  for (int y = 0; y < VGAX_HEIGHT; y++) {
    for (int x = 0; x < VGAX_WIDTH; x++) {
      t++; 
      // ByteBeat Formula: t * (t >> 5 | t >> 8)
      byte color = (t * (t >> 5 | t >> 8)) & 3; 
      vga.putpixel(x, y, color);
    }
  }
}
