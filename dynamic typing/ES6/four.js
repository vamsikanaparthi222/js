/* //filters
// withourt filters i want white color
let cars = [{model:"ghost," ,brand:"rollsroyce", price:50000000000, color:"white"},
{model:"s-class," ,brand:"mercedes", price:50000000000, color:"black"},
{model:"ghost," ,brand:"rollsroyce", price:"5 cr", color:"white"}]
let new_cars = []
for(car of cars){
    if(car.color == "white"){
        new_cars.push(car)
    }
}
console.log(car);
console.log(new_cars); */


//with filters
let cars = [{model:"ghost," ,brand:"rollsroyce", price:50000000000, color:"white"},
{model:"s-class," ,brand:"mercedes", price:50000, color:"black"},
{model:"ghost," ,brand:"rollsroyce", price:"5 cr", color:"white"}]
let new_cars = cars.filter((car)=>{
    return price()
})
console.log(cars);
console.log(new_cars);