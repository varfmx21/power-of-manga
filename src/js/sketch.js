// ========================================
// P5.JS SKETCH - Animación de fondo
// ========================================

let particles = [];
let quotes = [];
let mangaPanels = [];
let currentQuoteIndex = 0;

// Citas famosas de manga
const famousQuotes = [
  { text: "No huyas de ti mismo", source: "Evangelion" },
  { text: "El único monstruo aquí soy yo", source: "Monster" },
  { text: "Si no luchas, no puedes ganar", source: "Attack on Titan" },
  { text: "Seré el dios del nuevo mundo", source: "Death Note" },
  { text: "No tengo enemigos", source: "Vinland Saga" },
  { text: "¿Quién eres tú? ¿Quién soy yo?", source: "Perfect Blue" }
];

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-canvas');
  canvas.position(0, 0);
  canvas.style('z-index', '-2');
  
  // Crear partículas
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle());
  }
  
  // Crear elementos de texto flotantes
  for (let i = 0; i < 3; i++) {
    quotes.push(new FloatingQuote(famousQuotes[i]));
  }
}

function draw() {
  // Fondo oscuro con transparencia para efecto de estela
  background(10, 10, 10, 25);
  
  // Actualizar y dibujar partículas
  particles.forEach(p => {
    p.update();
    p.display();
    p.checkEdges();
  });
  
  // Actualizar y dibujar citas flotantes
  quotes.forEach(q => {
    q.update();
    q.display();
  });
  
  // Conectar partículas cercanas
  connectParticles();
}

// ========================================
// CLASE PARTICLE
// ========================================
class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
    this.size = random(2, 5);
    this.color = color(147, 51, 234, random(50, 150));
  }
  
  update() {
    this.pos.add(this.vel);
  }
  
  display() {
    noStroke();
    fill(this.color);
    circle(this.pos.x, this.pos.y, this.size);
    
    // Efecto de brillo
    fill(147, 51, 234, 30);
    circle(this.pos.x, this.pos.y, this.size * 2);
  }
  
  checkEdges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }
}

// ========================================
// CLASE FLOATING QUOTE
// ========================================
class FloatingQuote {
  constructor(quote) {
    this.quote = quote;
    this.pos = createVector(random(width * 0.1, width * 0.9), random(height * 0.2, height * 0.8));
    this.vel = createVector(random(-0.2, 0.2), random(-0.2, 0.2));
    this.alpha = 0;
    this.targetAlpha = random(30, 80);
    this.fadeSpeed = 0.5;
    this.size = random(12, 18);
  }
  
  update() {
    this.pos.add(this.vel);
    
    // Fade in/out
    if (this.alpha < this.targetAlpha) {
      this.alpha += this.fadeSpeed;
    }
    
    // Rebotar en los bordes
    if (this.pos.x < 100 || this.pos.x > width - 100) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 100 || this.pos.y > height - 100) {
      this.vel.y *= -1;
    }
  }
  
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    
    // Texto de la cita
    fill(147, 51, 234, this.alpha);
    noStroke();
    textAlign(CENTER);
    textSize(this.size);
    textFont('monospace');
    textStyle(ITALIC);
    text(this.quote.text, 0, 0);
    
    // Fuente
    fill(161, 161, 161, this.alpha * 0.7);
    textSize(this.size * 0.6);
    textStyle(NORMAL);
    text(`— ${this.quote.source}`, 0, this.size * 1.2);
    
    pop();
  }
}

// ========================================
// FUNCIONES AUXILIARES
// ========================================
function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      let d = dist(particles[i].pos.x, particles[i].pos.y, 
                   particles[j].pos.x, particles[j].pos.y);
      
      if (d < 150) {
        let alpha = map(d, 0, 150, 100, 0);
        stroke(147, 51, 234, alpha);
        strokeWeight(1);
        line(particles[i].pos.x, particles[i].pos.y,
             particles[j].pos.x, particles[j].pos.y);
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Interacción con el mouse
function mouseMoved() {
  // Empujar partículas cerca del mouse
  particles.forEach(p => {
    let d = dist(mouseX, mouseY, p.pos.x, p.pos.y);
    if (d < 100) {
      let force = p5.Vector.sub(p.pos, createVector(mouseX, mouseY));
      force.normalize();
      force.mult(0.5);
      p.vel.add(force);
    }
  });
}