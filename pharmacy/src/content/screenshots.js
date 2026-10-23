/**
 * Registry of the real application screenshots.
 *
 * Captions describe what is actually on each screen, based on the Blade
 * templates in the application. Nothing here is invented.
 */

export const SHOTS = {
    ownerInventory: {
        src: '/screenshots/pharmacy_owner_inventory_page.png',
        title: 'Owner inventory management',
        caption:
            'Every product in your pharmacy in one table, with stock against its minimum threshold, expiry date, computed status and public or private visibility. Click any of the six counters at the top to filter.',
        points: [
            'Total, Public, Private, Low Stock, Expiring Soon and Expired counters double as filters',
            'Stock shown as quantity against your own minimum threshold',
            'Edit or delete any product inline',
        ],
    },
    ownerAddProduct: {
        src: '/screenshots/pharmacy_owner_adding_new_prodcut.png',
        title: 'Adding a new product',
        caption:
            'One form captures everything clients see when they find your product: name, category, price, stock, minimum threshold, expiry date, dosage, laboratory, SKU and description.',
        points: [
            'Set the minimum threshold once and the app derives the stock status for you',
            'Choose Public so clients can find it, or Private to keep it internal',
            'Expiry date and threshold drive the low-stock and expiry alerts',
        ],
    },
    ownerReservations: {
        src: '/screenshots/pharmacy_owner_reservartions_page.png',
        title: 'Reservation oversight',
        caption:
            'Every reservation made against your pharmacy, who made it, the pickup code, quantity, status, and which member of staff completed it.',
        points: [
            'Product, client, code, quantity, status and staff member in one ledger',
            'Reservation and expiry timestamps per row',
            'Full visibility for the owner without touching the counter',
        ],
    },
    ownerSellers: {
        src: '/screenshots/pharmacy_owner_sellers_page.png',
        title: 'Seller accounts',
        caption:
            'Create an account for each member of counter staff. Sellers are bound to your pharmacy, so they only ever see your stock and your reservations.',
        points: [
            'Create a seller with name, email and password',
            'Remove access when someone leaves',
            'Staff never see another pharmacy’s data',
        ],
    },
    ownerSales: {
        src: '/screenshots/pharmacy_owner_sales_page.png',
        title: 'Pharmacy sales history',
        caption:
            'Total sales, total revenue and number of active sellers, followed by the full sales ledger showing product, sale type, client, seller, quantity, price and date.',
        points: [
            'Distinguishes reservation sales from counter sales',
            'Attribution per seller',
            'Revenue in DA, dates to the minute',
        ],
    },
    sellerPos: {
        src: '/screenshots/seller_dashboard_page.png',
        title: 'Seller point of sale',
        caption:
            'The counter view: a card per medication with live status, stock remaining, expiry date and price. Sell an item and the stock drops immediately.',
        points: [
            'Enter a client’s 6-digit code to hand over a reserved product',
            'Record a manual counter sale with a quantity',
            'Filter by available, low stock, expiring soon or expired',
        ],
    },
    sellerReservations: {
        src: '/screenshots/seller_reservation_page.png',
        title: 'Seller reservation desk',
        caption:
            'The reservation list for your pharmacy with the pickup code front and centre. Validate the code the client shows you at the counter and the sale is recorded.',
        points: [
            'Product, client, code, quantity, status and expiry',
            'Code validation completes the reservation and records the sale',
            'Expired codes are rejected and the stock is returned',
        ],
    },
    sellerSales: {
        src: '/screenshots/seller_sales_page.png',
        title: 'Seller sales history',
        caption:
            'Each member of staff sees the sales they personally completed, with items sold and revenue generated.',
        points: [
            'Items sold and revenue generated at a glance',
            'Product, sale type, quantity, price and date',
            'Only your own transactions',
        ],
    },
    clientCatalog: {
        src: '/screenshots/client_main_page.png',
        title: 'Client medication search',
        caption:
            'A patient opens PharmaPortal and searches by medication name or description. Results show the price in DA and whether the product is available or out of stock.',
        points: [
            'Search by name, description, category, laboratory or pharmacy name',
            'Type-ahead suggestions labelled by what they match',
            'Out-of-stock products are clearly marked',
        ],
    },
    clientCategories: {
        src: '/screenshots/client_categories_page.png',
        title: 'Browse by category',
        caption:
            'Every product is filed under its therapeutic category, so a client can start from a category instead of guessing a brand name.',
        points: [
            'Category grid drawn from your live product data',
            'Paginated catalog within the chosen category',
            'Same price and availability detail as search results',
        ],
    },
    clientNearMe: {
        src: '/screenshots/client_near_me_page.png',
        title: 'Pharmacies near you',
        caption:
            'With location access granted, PharmaPortal lists the pharmacies closest to the client, ordered by real distance, each with the products they actually have in stock.',
        points: [
            'Distance in kilometres, calculated per pharmacy',
            'Optional filter by medication name',
            'Address, commune, wilaya, opening hours, phone and a Google Maps link',
        ],
    },
    clientReservations: {
        src: '/screenshots/client_reservations_list_page.png',
        title: 'Your reservations',
        caption:
            'Each reservation shows its status, the pharmacy, the address and a 6-digit pickup code valid for 24 hours, plus when it was reserved and when it expires.',
        points: [
            '6-digit pickup code to present at the counter',
            'Reserved and expiry timestamps on every entry',
            'Google Maps link to the dispensing pharmacy',
        ],
    },
};

export const shot = (key) => SHOTS[key];
