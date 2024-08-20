import { Zoo, Animal } from '../src/challenge/zoo';
 // Ajuste o caminho conforme necessário

describe('Teste', () => {
  
  let zoo: Zoo;

  beforeEach(() => {
    zoo = new Zoo();
  });

  // Cenário 1: Adicionar um animal ao zoológico
  it('deve adicionar um animal ao zoológico', () => {
    const animal = new Animal('Leo', 'Leão', 5);
    zoo.addAnimal(animal);
    expect(zoo.getAllAnimals()).toContain(animal);
  });

  // Cenário 2: Remover um animal do zoológico
  it('deve remover um animal existente do zoológico', () => {
    const animal = new Animal('Leo', 'Leão', 5);
    zoo.addAnimal(animal);
    zoo.removeAnimal('Leo');
    expect(zoo.getAllAnimals()).not.toContain(animal);
  });

  it('não deve fazer nada se tentar remover um animal que não existe', () => {
    const animal = new Animal('Leo', 'Leão', 5);
    zoo.addAnimal(animal);
    zoo.removeAnimal('Tigre');
    expect(zoo.getAllAnimals()).toContain(animal);
  });

  // Cenário 3: Recuperar informações de um animal
  it('deve retornar um animal pelo nome', () => {
    const animal = new Animal('Leo', 'Leão', 5);
    zoo.addAnimal(animal);
    const retrievedAnimal = zoo.getAnimal('Leo');
    expect(retrievedAnimal).toBe(animal);
  });

  it('deve retornar indefinido para um animal que não existe', () => {
    const animal = new Animal('Leo', 'Leão', 5);
    zoo.addAnimal(animal);
    const retrievedAnimal = zoo.getAnimal('Tigre');
    expect(retrievedAnimal).toBeUndefined();
  });

  // Cenário 4: Recuperar todos os animais do zoológico
  it('deve retornar todos os animais no zoológico', () => {
    const Leão = new Animal('Leo', 'Leão', 5);
    const Tigre = new Animal('Tigres', 'Tigre', 3);
    zoo.addAnimal(Leão);
    zoo.addAnimal(Tigre);
    const animals = zoo.getAllAnimals();
    expect(animals).toContain(Leão);
    expect(animals).toContain(Tigre);
  });

  it('deve retornar um array vazio se o zoológico estiver vazio', () => {
    expect(zoo.getAllAnimals()).toEqual([]);
  });

  // Cenário 5: Recuperar animais por espécie
  it('deve retornar os animais por espécie', () => {
    const Leão1 = new Animal('Leo', 'Leão', 5);
    const Leão2 = new Animal('Simba', 'Leão', 4);
    const Tigre = new Animal('Tigres', 'Tigre', 3);
    zoo.addAnimal(Leão1);
    zoo.addAnimal(Leão2);
    zoo.addAnimal(Tigre);
    const Leãos = zoo.getAnimalsBySpecies('Leão');
    expect(Leãos).toContain(Leão1);
    expect(Leãos).toContain(Leão2);
    expect(Leãos).not.toContain(Tigre);
  });

  it('deve retornar um array vazio se não existirem animais da espécie', () => {
    const Tigre = new Animal('Tigres', 'Tigre', 3);
    zoo.addAnimal(Tigre);
    const Leãos = zoo.getAnimalsBySpecies('Leão');
    expect(Leãos).toEqual([]);
  });

  // Cenário 6: Calcular a idade média dos animais
  it('deve retornar a idade média dos animais', () => {
    const Leão = new Animal('Leo', 'Leão', 5);
    const Tigre = new Animal('Tigres', 'Tigre', 3);
    zoo.addAnimal(Leão);
    zoo.addAnimal(Tigre);
    expect(zoo.getAverageAge()).toBe(4);
  });

  it('deve retornar 0 como a idade média se não houver animais', () => {
    expect(zoo.getAverageAge()).toBe(0);
  });

  // Cenário 7: Casos Especiais e Limite
  it('deve permitir adicionar animais com nomes duplicados', () => {
    const Leão1 = new Animal('Leo', 'Leão', 5);
    const Leão2 = new Animal('Leo', 'Leão', 4);
    zoo.addAnimal(Leão1);
    zoo.addAnimal(Leão2);
    const animals = zoo.getAllAnimals();
    expect(animals).toContain(Leão1);
    expect(animals).toContain(Leão2);
  });

  it('deve remover todos os animais e deixar o zoológico vazio', () => {
    const Leão = new Animal('Leo', 'Leão', 5);
    const Tigre = new Animal('Tigres', 'Tigre', 3);
    zoo.addAnimal(Leão);
    zoo.addAnimal(Tigre);
    zoo.removeAnimal('Leo');
    zoo.removeAnimal('Tigres');
    expect(zoo.getAllAnimals()).toEqual([]);
  });

});
