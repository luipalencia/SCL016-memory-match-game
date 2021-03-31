import {App , gamePage } from './App.js';


describe('App', () => {
  it('should render without crashing', () => {
    const initContent = App();
    expect(initContent instanceof HTMLElement).toBe(true);
  });
});

describe('gamePage', () => {

  it('should be a function', () => {
    expect(typeof gamePage).toBe('function');
  });
});

describe('gamePage', () => {
  it('should render without crashing', () => {
    const node1 = gamePage();
    expect(node1 instanceof HTMLElement).toBe(true);
  });
});
