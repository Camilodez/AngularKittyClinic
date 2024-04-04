import { Injectable } from '@angular/core';
import { Gato } from '../models/gato.model';

@Injectable({
  providedIn: 'root'
})
export class GatoService {

  constructor() {
    this.crearGatos();
    console.log(this.ListaGatos)
   }
  ListaGatos: Gato[] = [
    /*{
      id: 1,
      nombre: "Whiskers",
      raza: "Persa",
      edad: 2,
      foto: "https://www.zooplus.es/magazine/wp-content/uploads/2017/10/fotolia_103481419.jpg",
      estado: true,
      enfermedad: "Ninguna"
    },
    {
      id: 2,
      nombre: "Luna",
      raza: "Siames",
      edad: 1,
      foto: "https://estaticos-cdn.prensaiberica.es/clip/4e1211c1-1520-41a7-aabb-42c2e03d1731_alta-libre-aspect-ratio_default_0.jpg",
      estado: true,
      enfermedad: "Ninguna"
    },
    {
      id: 3,
      nombre: "Oliver",
      raza: "Sphynx",
      edad: 3,
      foto: "https://th.bing.com/th/id/OIP.D4eSVdrlVaOBZZvlu9iTAgHaJ7?w=889&h=1191&rs=1&pid=ImgDetMain",
      estado: true,
      enfermedad: "Ninguna"
    },
    {
      id: 4,
      nombre: "Bella",
      raza: "Maine Coon",
      edad: 4,
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Whiskers.jpg/220px-Whiskers.jpg",
      estado: true,
      enfermedad: "Ninguna"
    }*/
  ]

  NombresGatos: string[] = ["Whiskers", "Luna", "Oliver", "Bella", "Simba", "Chloe", "Shadow", "Tiger", "Misty",
    "Milo", "Cleo", "Leo", "Nala", "Max", "Daisy", "Charlie", "Mochi", "Oreo", "Gizmo", "Sassy",
    "Smokey", "Coco", "Lucy", "Rocky", "Mittens", "Spike", "Ziggy", "Mia", "Felix",
    "Tinkerbell", "Boots", "Lily", "Muffin", "Finn", "Whiskey", "Cinnamon", "Cupcake", "Ginger", "Kitty",
    "Olive", "Snickers", "Mango", "Pepper", "Pumpkin", "Twix", "Jasmine", "Apollo", "Lulu",
    "Marbles", "Waffles", "Zorro", "Mochaccino", "Peaches", "Snickerdoodle", "Butterscotch", "Zigzag", "Waldo",
    "Whisper", "Tango", "Snuggles", "Pebbles", "Snuffy", "Fluffy", "Rusty", "Jellybean", "Hazel", "Bubbles", "Pippin",
    "Marshmallow", "Honey", "Sapphire", "Twinkle", "Thunder", "Caramel", "Midnight", "Dusty", "Blaze", "Pippin",
    "Lola", "Oscar", "Ruby", "Boomer", "Shadowfax", "Sparkle", "Stormy", "Truffle", "Whisper", "Ziggy",
    "Zuzu", "Olivia"]

  RazasGatos: string[] = [
    "Siamés", "Bengalí", "Ragdoll", "Abyssinian", "Persa", "Maine Coon", "Scottish Fold",
    "Sphynx", "Russian Blue", "Norwegian Forest",
    "Munchkin", "Savannah", "Burmese", "Birman", "Manx", "Cornish Rex", "British Shorthair",
    "Turkish Angora", "Oriental", "Bombay",
    "Siamese", "Balinese", "Chartreux", "Devon Rex", "Exotic Shorthair", "Himalayan",
    "Japanese Bobtail", "Korat", "Nebelung", "Ocicat",
    "Pixiebob", "Scottish Straight", "Tonkinese", "Turkish Van", "American Bobtail",
    "American Curl", "American Shorthair", "American Wirehair", "Asian", "Australian Mist",
    "Colorpoint Shorthair", "European Shorthair", "Havana Brown", "LaPerm", "Napoleon",
    "Ojos Azules", "RagaMuffin", "RagaMyk", "Selkirk Rex", "Serengeti",
    "Singapura", "Snowshoe", "Somali", "Toyger", "Ukrainian Levkoy", "Wila Krungthep",
    "Yavanna", "York Chocolate", "Yoruba", "Zebu"
  ]

  UrlsGatos: string[] = [
    "https://www.zooplus.es/magazine/wp-content/uploads/2017/10/fotolia_103481419.jpg",
    "https://www.zooplus.es/magazine/wp-content/uploads/2018/08/maine-coon-3.jpg",
    "https://i.pinimg.com/originals/1f/2d/4f/1f2d4fa68799ba91ff4787cfe18aaee1.jpg",
    "https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-1248x770@Las%20Provincias.jpg",
    "https://estaticos-cdn.prensaiberica.es/clip/4e1211c1-1520-41a7-aabb-42c2e03d1731_alta-libre-aspect-ratio_default_0.jpg",
    "https://static.nationalgeographic.es/files/styles/image_3200/public/nationalgeographic_1926777.jpg?w=1600&h=900",
    "https://i.pinimg.com/originals/91/d8/9e/91d89ea00a3f2e9a3d326152da4a2548.jpg",
    "https://th.bing.com/th/id/OIP.SpCktVxv_adtCFqHHd1rRQHaE8?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.D4eSVdrlVaOBZZvlu9iTAgHaJ7?w=889&h=1191&rs=1&pid=ImgDetMain"
  ]

  EnfermedadesGatos: string[] = [
    "Rinotraqueítis viral felina", "Panleucopenia felina", "Calicivirus felino", "Leucemia felina", 
    "Inmunodeficiencia felina", "Peritonitis infecciosa felina", "Toxoplasmosis", 
    "Gingivoestomatitis crónica felina", "Asma felina", "Insuficiencia renal crónica"
  ]

  crearGatos() {
    for(let i = 1; i <= 100; i++){
      const id: number = i
      const nombre: string = this.NombresGatos[i % this.NombresGatos.length];
      const raza: string = this.RazasGatos[i % this.RazasGatos.length];
      const edad: number = Math.floor(Math.random() * 10) + 1;
      const foto: string = this.UrlsGatos[i % this.UrlsGatos.length];
      const enfermedad: string = this.EnfermedadesGatos[i % this.EnfermedadesGatos.length];
      const gato: Gato = {id, nombre, raza, edad, foto,estado:true, enfermedad};
      this.ListaGatos.push(gato);
    }
  }

  findAll(){
    return this.ListaGatos;
  }

  findById(id: number): Gato {
    console.log(this.ListaGatos)
    const gato: Gato | undefined = this.ListaGatos.find(x => x.id === id);
    if(!gato) throw new Error('Gato no encontrado');
    return gato;
  }

  agregarGato(gato: Gato){
    gato.id = this.ListaGatos.length + 1;
    this.ListaGatos.push(gato);
    console.log(this.ListaGatos);
  }

  borrarGato(id: number){
    this.ListaGatos = this.ListaGatos.filter(x => x.id !== id);
  }

  actualizarGato(gato: Gato){
    const index = this.ListaGatos.findIndex(x => x.id === gato.id);
    this.ListaGatos[index] = gato;
  }

  
}

