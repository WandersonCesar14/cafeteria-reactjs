import Food from './Food';

function App(){
    const foods =[
    {   id:1,
        name: 'Hambúrguer',
        image: 'imgs/hamburguer.jpg'
    },

    {   id:2,
        name: 'Suco',
        image: 'imgs/suco.jpg'
    },
    
    
];

    
   return(
    <div class="container">
    <h1 class="mt-5 text-center">Menu</h1>

    <div class="text-right">
            
        <button 
            type="button" class="btn btn-secondary rounded-circle mr4- font-weight-bold" 
            //id="newBtnFood"
            data-toggle="modal"
            data-target="formFoofModal"
            //oniclick="loadFormCreateFood()"
        >
            +
            </button>
           </div>
           <section className="card-deck my-3">
            {foods.map((food) =>{
                return <Food food={food} key={food.id} />;
            })}


            </section>
            </div>
   );
}

 export default App;

    


