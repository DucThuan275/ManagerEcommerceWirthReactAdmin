import { List, Datagrid, TextField, DeleteButton, EditButton, Create, Edit, SimpleForm, TextInput, useRecordContext, SimpleShowLayout, NumberField, ArrayField, ImageField, ReferenceField, Show } from "react-admin";
import PDFButton from '../PDFButton';
const CustomPDFButton = () => {
    const record = useRecordContext();
    if (!record) {
        return (<span>Loading...</span>)
    }
    if (!record.id) {
        return (<span>No cart ID</span>)
    }
    return <PDFButton />
}

export const CartList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="cartId" label="Cart ID" />
           <NumberField
                source="totalPrice"
                label="Total Price"
                options={{
                    style: "decimal",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                }}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    textAlign: "start",
                }}
            />

        </Datagrid>
    </List>
);
export const CartShow = () => {
    return (
        <Show>
            <SimpleShowLayout>
                <CustomPDFButton />
                <TextField source="id" label="Cart ID" />
                <NumberField source="totalPrice" label="Total Price" />
                <ArrayField source="products" label="Products">
                    <Datagrid>
                        <TextField source="id" label="Product ID" />
                        <TextField source="productName" label="Product Name" />
                        <ImageField source="image" label="Image" />
                        <TextField source="description" label="Description" />
                        <NumberField source="quantity" label="Quantity" />
                        <NumberField source="price" label="Price" />
                        <NumberField source="discount" label="Discount" />
                        <NumberField source="specialPrice" label="Special Price" />
                        <ReferenceField source="category.catogoryName" reference="categories" label="Category">
                            <TextField source="catogoryName" />
                        </ReferenceField>
                    </Datagrid>
                </ArrayField>
            </SimpleShowLayout>
        </Show>
    )
}