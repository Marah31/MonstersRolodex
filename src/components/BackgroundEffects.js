import { Component } from 'react';

class BackgroundEffects extends Component {
  componentDidMount() {
    this.createFloatingElements();
  }

  createFloatingElements() {
    const container = document.body;
    
    // create floating geometric shapes
    for (let i = 0; i < 15; i++) {
      const shape = document.createElement('div');
      shape.style.position = 'fixed';
      shape.style.width = Math.random() * 6 + 3 + 'px';
      shape.style.height = shape.style.width;
      shape.style.background = `rgba(37, 186, 202, ${Math.random() * 0.3 + 0.1})`;
      shape.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      shape.style.left = Math.random() * 100 + '%';
      shape.style.top = Math.random() * 100 + '%';
      shape.style.pointerEvents = 'none';
      shape.style.zIndex = '-1';
      shape.style.animation = `float ${Math.random() * 6 + 8}s ease-in-out infinite`;
      shape.style.animationDelay = Math.random() * 5 + 's';
      
      container.appendChild(shape);
    }
  }

  render() {
    return null;
  }
}

export default BackgroundEffects;