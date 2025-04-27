import Header from "./Header";
import NewProduct from "./NewProduct";
import Range from "./Range";
import Product from "./Product";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <Product
            productName={"Enterprise"}
            productPrice={29}
            users={30}
            storage={15}
            support={"Phone and email"}
            otherFeature={"Help center access"}
          ></Product>
          <Product
            productName={"Pro"}
            productPrice={15}
            users={20}
            storage={10}
            support={"Priority email"}
            otherFeature={"Help center access"}
          ></Product>
          <Product
            productName={"Free"}
            productPrice={0}
            users={10}
            storage={2}
            support={"Email"}
            otherFeature={"Help center access"}
          ></Product>

          <NewProduct></NewProduct>

          <Range></Range>
        </div>
      </main>
    </>
  );
}

export default App;
