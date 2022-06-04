import { hexToRgba } from './hex-to-rgba';

describe('Hex to Rgba', () => {
  it('should convert hex to rgba', () => {
    expect(hexToRgba('#FC6B21', '0.9')).toBe('rgba(252,107,33,0.9)');
  });
});
