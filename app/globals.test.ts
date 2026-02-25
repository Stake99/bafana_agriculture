import fs from 'fs';
import path from 'path';

describe('Global CSS - Smooth Scroll Behavior', () => {
  test('globals.css contains scroll-behavior: smooth', () => {
    const globalsPath = path.join(process.cwd(), 'app', 'globals.css');
    const globalsContent = fs.readFileSync(globalsPath, 'utf-8');
    
    expect(globalsContent).toContain('scroll-behavior: smooth');
  });

  test('scroll-behavior is applied to html element', () => {
    const globalsPath = path.join(process.cwd(), 'app', 'globals.css');
    const globalsContent = fs.readFileSync(globalsPath, 'utf-8');
    
    // Check that scroll-behavior is in an html selector block
    const htmlBlockRegex = /html\s*\{[^}]*scroll-behavior:\s*smooth[^}]*\}/s;
    expect(globalsContent).toMatch(htmlBlockRegex);
  });
});
