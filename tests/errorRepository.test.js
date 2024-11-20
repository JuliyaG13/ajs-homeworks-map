import ErrorRepository from '../src/errorRepository';

describe('ErrorRepository', () => {
  let errorRepo;

  beforeEach(() => {
    errorRepo = new ErrorRepository();
  });

  test('should return description for known error codes', () => {
    expect(errorRepo.translate(400)).toBe('Bad Request');
    expect(errorRepo.translate(401)).toBe('Unauthorized');
    expect(errorRepo.translate(404)).toBe('Not Found');
    expect(errorRepo.translate(500)).toBe('Internal Server Error');
  });

  test('should return "Unknown error" for unknown error codes', () => {
    expect(errorRepo.translate(999)).toBe('Unknown error');
    expect(errorRepo.translate(-1)).toBe('Unknown error');
    expect(errorRepo.translate(0)).toBe('Unknown error');
  });
});