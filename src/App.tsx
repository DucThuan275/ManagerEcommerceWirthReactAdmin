// in src/App.tsx
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser, Layout, CustomRoutes } from "react-admin";
import { Route } from "react-router-dom"
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { Dashboard } from "./Dashboard";
import CategoryIcon from '@mui/icons-material/Category'
import Inventory2Icom from '@mui/icons-material/Inventory2'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { CategoryCreate, CategoryEdit, CategoryList } from "./components/Category";
import { ProductCreate, ProductEdit, ProductList } from "./components/Product";
import ProductImageUpdate from "./components/ProductImageUpdate";
import { CartList, CartShow } from "./components/Cart";

export const App = () => <Admin authProvider={authProvider} layout={Layout} dataProvider={dataProvider} dashboard={Dashboard}>
  <CustomRoutes>
    <Route path="/products/:id/update-image" element={<ProductImageUpdate />} />
  </CustomRoutes>
  <Resource name="categories" list={CategoryList} create={CategoryCreate} edit={CategoryEdit} icon={CategoryIcon} />
  <Resource name="products" list={ProductList} create={ProductCreate} edit={ProductEdit} icon={Inventory2Icom} />
  <Resource name="carts" list={CartList} show={CartShow}  icon={ShoppingCartIcon} />
</Admin>;