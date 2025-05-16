import React from "react";
import {
    Image,
    Text,
    View,
    Page,
    Document,
    StyleSheet,
} from "@react-pdf/renderer";
import logo from './img/LogoHITC.png';

const MyDocument = ({ data = {} }) => {
    const { cartId = "", totalPrice = 0, products = [] } = data;

    // Calculate total price dynamically from products
    const calculatedTotalPrice = products.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0).toFixed(2); // Ensure the total price is rounded to 2 decimal places

    const styles = StyleSheet.create({
        page: {
            fontSize: 11,
            padding: 40,
            lineHeight: 1.5,
            flexDirection: "column",
            backgroundColor: "#F5F5F5",
        },
        logoContainer: { alignItems: "center", marginBottom: 20 },
        logo: { width: 120 },
        header: { textAlign: "center", fontSize: 16, marginBottom: 20, fontWeight: "bold" },
        addressContainer: { marginBottom: 20 },
        addressTitle: { fontSize: 12, fontWeight: "bold", marginBottom: 5 },
        address: { fontSize: 12 },
        tableContainer: { marginBottom: 20 },
        tableRow: { flexDirection: "row", borderBottomWidth: 1, borderColor: "#ccc" },
        tableHeader: {
            fontSize: 11,
            fontWeight: "bold",
            padding: 5,
            flex: 1,
            backgroundColor: "#DEDEDE",
            textAlign: "center",
        },
        tableCell: {
            fontSize: 10,
            padding: 5,
            flex: 1,
            textAlign: "center",
        },
        totalRow: {
            flexDirection: "row",
            fontSize: 12,
            fontWeight: "bold",
            borderTopWidth: 1,
            borderColor: "#000",
            marginTop: 10,
            paddingTop: 5,
        },
        footer: { marginTop: 20, textAlign: "center", fontSize: 10, color: "#888" },
    });

    const TableBody = () =>
        products.map((product) => (
            <View style={styles.tableRow} key={product.productId}>
                <Text style={styles.tableCell}>{product.productName}</Text>
                <Text style={styles.tableCell}>{product.price.toFixed(2)}</Text>
                <Text style={styles.tableCell}>{product.quantity}</Text>
                <Text style={styles.tableCell}>
                    {(product.price * product.quantity).toFixed(2)}
                </Text>
            </View>
        ));

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Logo and Header */}
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} src={logo} />
                </View>
                <Text style={styles.header}>Invoice</Text>

                {/* Address Section */}
                <View style={styles.addressContainer}>
                    <Text style={styles.addressTitle}>Cart ID:</Text>
                    <Text style={styles.address}>{cartId}</Text>
                    <Text style={styles.addressTitle}>Email:</Text>
                    <Text style={styles.address}>
                        {localStorage.getItem("username") || "Unknown"}
                    </Text>
                    <Text style={styles.addressTitle}>Total Price:</Text>
                    <Text style={styles.address}>{calculatedTotalPrice} VND</Text>
                </View>

                {/* Table Section */}
                <View style={styles.tableContainer}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableHeader}>Items</Text>
                        <Text style={styles.tableHeader}>Price</Text>
                        <Text style={styles.tableHeader}>Quantity</Text>
                        <Text style={styles.tableHeader}>Amount</Text>
                    </View>
                    {products.length ? (
                        <TableBody />
                    ) : (
                        <Text style={{ marginTop: 10, textAlign: "center" }}>
                            No products available
                        </Text>
                    )}
                    {/* Total Row */}
                    <View style={styles.totalRow}>
                        <Text style={{ flex: 3, textAlign: "right" }}>Total:</Text>
                        <Text style={styles.tableCell}>{calculatedTotalPrice} VND</Text>
                    </View>
                </View>

                {/* Footer */}
                <Text style={styles.footer}>
                    Thank you for your purchase! Visit us again.
                </Text>
            </Page>
        </Document>
    );
};

export default MyDocument;
