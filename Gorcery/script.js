// ========== PRODUCTS DATABASE ==========

// --- 1. ENHANCED PRODUCT DATABASE WITH RATINGS & STOCK ---
const products = [
    // FRUITS & VEGETABLES
    { id: 1, name: 'Organic Bananas', price: 0.99, category: 'fruit', img: '🍌', rating: 4.5, reviews: 128, stock: 45 },
    { id: 2, name: 'Red Bell Pepper', price: 1.50, category: 'veggie', img: '🫑', rating: 4.3, reviews: 89, stock: 32 },
    { id: 3, name: 'Fresh Strawberries', price: 2.99, category: 'fruit', img: '🍓', rating: 4.8, reviews: 156, stock: 28 },
    { id: 4, name: 'Organic Kale', price: 2.20, category: 'veggie', img: '🥬', rating: 4.2, reviews: 67, stock: 22 },
    { id: 5, name: 'Green Apples', price: 1.75, category: 'fruit', img: '🍏', rating: 4.4, reviews: 95, stock: 50 },
    { id: 6, name: 'Carrots (1lb)', price: 0.85, category: 'veggie', img: '🥕', rating: 4.6, reviews: 112, stock: 60 },
    { id: 7, name: 'Orange Juice', price: 3.99, category: 'fruit', img: '🍊', rating: 4.1, reviews: 73, stock: 35 },
    { id: 8, name: 'Broccoli', price: 2.50, category: 'veggie', img: '🥦', rating: 4.3, reviews: 81, stock: 19 },

    // DAIRY & EGGS
    { id: 9, name: 'Whole Milk', price: 3.49, category: 'dairy', img: '🥛', rating: 4.7, reviews: 145, stock: 55 },
    { id: 10, name: 'Large Eggs (12pk)', price: 4.50, category: 'dairy', img: '🥚', rating: 4.8, reviews: 167, stock: 42 },
    { id: 11, name: 'Cheddar Cheese', price: 4.99, category: 'dairy', img: '🧀', rating: 4.5, reviews: 103, stock: 31 },
    { id: 12, name: 'Greek Yogurt', price: 5.50, category: 'dairy', img: '🥑', rating: 4.6, reviews: 129, stock: 38 },
    { id: 13, name: 'Butter (1lb)', price: 3.75, category: 'dairy', img: '🧈', rating: 4.4, reviews: 87, stock: 26 },
    { id: 14, name: 'Mozzarella', price: 4.25, category: 'dairy', img: '🧀', rating: 4.5, reviews: 98, stock: 24 },

    // BAKERY
    { id: 15, name: 'Sourdough Bread', price: 4.00, category: 'bakery', img: '🍞', rating: 4.7, reviews: 134, stock: 20 },
    { id: 16, name: 'Blueberry Muffin', price: 2.50, category: 'bakery', img: '🧁', rating: 4.3, reviews: 76, stock: 15 },
    { id: 17, name: 'Croissant', price: 2.99, category: 'bakery', img: '🥐', rating: 4.4, reviews: 92, stock: 18 },
    { id: 18, name: 'Whole Wheat Bread', price: 3.50, category: 'bakery', img: '🍞', rating: 4.2, reviews: 69, stock: 25 },
    { id: 19, name: 'Chocolate Donut', price: 1.99, category: 'bakery', img: '🍩', rating: 4.6, reviews: 118, stock: 30 },

    // BABY FOOD & CARE
    { id: 20, name: 'Baby Formula', price: 12.99, category: 'baby', img: '🍼', rating: 4.8, reviews: 142, stock: 40 },
    { id: 21, name: 'Infant Cereal', price: 4.50, category: 'baby', img: '🥣', rating: 4.5, reviews: 75, stock: 22 },
    { id: 22, name: 'Diapers XL Pack', price: 24.99, category: 'baby', img: '👶', rating: 4.7, reviews: 189, stock: 50 },
    { id: 23, name: 'Baby Wipes', price: 8.99, category: 'baby', img: '🧻', rating: 4.6, reviews: 108, stock: 35 },
    { id: 24, name: 'Baby Shampoo', price: 6.99, category: 'baby', img: '🧴', rating: 4.4, reviews: 82, stock: 28 },
    { id: 25, name: 'Pacifiers (3pk)', price: 5.99, category: 'baby', img: '🍭', rating: 4.3, reviews: 64, stock: 20 },

    // HOME CLEANING
    { id: 26, name: 'All-Purpose Cleaner', price: 3.99, category: 'cleaning', img: '🧹', rating: 4.2, reviews: 71, stock: 45 },
    { id: 27, name: 'Laundry Detergent', price: 7.99, category: 'cleaning', img: '🧺', rating: 4.5, reviews: 124, stock: 38 },
    { id: 28, name: 'Dish Soap', price: 2.49, category: 'cleaning', img: '🍽️', rating: 4.3, reviews: 85, stock: 50 },
    { id: 29, name: 'Bleach', price: 4.50, category: 'cleaning', img: '💧', rating: 4.1, reviews: 56, stock: 32 },
    { id: 30, name: 'Floor Cleaner', price: 5.99, category: 'cleaning', img: '🧹', rating: 4.4, reviews: 79, stock: 27 },
    { id: 31, name: 'Toilet Brush Set', price: 6.99, category: 'cleaning', img: '🚽', rating: 4.2, reviews: 61, stock: 21 },
    { id: 32, name: 'Sponges (12pk)', price: 3.49, category: 'cleaning', img: '🧽', rating: 4.6, reviews: 103, stock: 55 },

    // PET CARE
    { id: 33, name: 'Dog Food Premium', price: 14.99, category: 'pet', img: '🐕', rating: 4.7, reviews: 138, stock: 36 },
    { id: 34, name: 'Cat Food', price: 8.99, category: 'pet', img: '🐈', rating: 4.5, reviews: 97, stock: 44 },
    { id: 35, name: 'Dog Treats', price: 5.99, category: 'pet', img: '🦴', rating: 4.4, reviews: 88, stock: 52 },
    { id: 36, name: 'Cat Litter', price: 12.99, category: 'pet', img: '🐱', rating: 4.3, reviews: 101, stock: 28 },
    { id: 37, name: 'Pet Shampoo', price: 7.99, category: 'pet', img: '🧴', rating: 4.2, reviews: 68, stock: 33 },
    { id: 38, name: 'Dog Bed', price: 24.99, category: 'pet', img: '🛏️', rating: 4.6, reviews: 115, stock: 18 },
    { id: 39, name: 'Cat Scratching Post', price: 19.99, category: 'pet', img: '📦', rating: 4.4, reviews: 83, stock: 14 },

    // BEAUTY & HEALTH
    { id: 40, name: 'Face Wash', price: 8.99, category: 'beauty', img: '🧴', rating: 4.6, reviews: 127, stock: 41 },
    { id: 41, name: 'Moisturizer', price: 12.99, category: 'beauty', img: '💧', rating: 4.7, reviews: 144, stock: 35 },
    { id: 42, name: 'Sunscreen SPF 50', price: 9.99, category: 'beauty', img: '☀️', rating: 4.5, reviews: 102, stock: 48 },
    { id: 43, name: 'Shampoo & Conditioner', price: 7.99, category: 'beauty', img: '🧴', rating: 4.4, reviews: 119, stock: 52 },
    { id: 44, name: 'Toothpaste', price: 3.99, category: 'beauty', img: '🪥', rating: 4.8, reviews: 156, stock: 60 },
    { id: 45, name: 'Multivitamins', price: 14.99, category: 'beauty', img: '💊', rating: 4.6, reviews: 110, stock: 37 },
    { id: 46, name: 'Vitamin C Serum', price: 16.99, category: 'beauty', img: '💧', rating: 4.7, reviews: 135, stock: 26 },
    { id: 47, name: 'Face Mask', price: 6.99, category: 'beauty', img: '😷', rating: 4.3, reviews: 74, stock: 39 },

    // FASHION & LIFESTYLE
    { id: 48, name: 'Cotton T-Shirt', price: 12.99, category: 'fashion', img: '👕', rating: 4.5, reviews: 96, stock: 47 },
    { id: 49, name: 'Denim Jeans', price: 39.99, category: 'fashion', img: '👖', rating: 4.6, reviews: 122, stock: 29 },
    { id: 50, name: 'Sports Socks (6pk)', price: 8.99, category: 'fashion', img: '🧦', rating: 4.4, reviews: 87, stock: 54 },
    { id: 51, name: 'Winter Jacket', price: 59.99, category: 'fashion', img: '🧥', rating: 4.7, reviews: 98, stock: 15 },
    { id: 52, name: 'Casual Sneakers', price: 45.99, category: 'fashion', img: '👟', rating: 4.6, reviews: 111, stock: 23 },
    { id: 53, name: 'Baseball Cap', price: 14.99, category: 'fashion', img: '🧢', rating: 4.3, reviews: 72, stock: 38 },
    { id: 54, name: 'Scarf', price: 16.99, category: 'fashion', img: '🧣', rating: 4.4, reviews: 81, stock: 25 },

    // HOME & KITCHEN
    { id: 55, name: 'Stainless Steel Pan', price: 24.99, category: 'home', img: '🍳', rating: 4.7, reviews: 113, stock: 32 },
    { id: 56, name: 'Ceramic Plates (6)', price: 19.99, category: 'home', img: '🍽️', rating: 4.5, reviews: 94, stock: 27 },
    { id: 57, name: 'Kitchen Knife Set', price: 29.99, category: 'home', img: '🔪', rating: 4.8, reviews: 148, stock: 21 },
    { id: 58, name: 'Blender', price: 34.99, category: 'home', img: '🥤', rating: 4.6, reviews: 105, stock: 18 },
    { id: 59, name: 'Coffee Maker', price: 39.99, category: 'home', img: '☕', rating: 4.7, reviews: 126, stock: 16 },
    { id: 60, name: 'Cutting Board', price: 12.99, category: 'home', img: '🪵', rating: 4.4, reviews: 77, stock: 43 },
    { id: 61, name: 'Microwave Safe Containers', price: 9.99, category: 'home', img: '📦', rating: 4.5, reviews: 89, stock: 51 },
    { id: 62, name: 'Bed Sheets Set', price: 34.99, category: 'home', img: '🛏️', rating: 4.6, reviews: 117, stock: 25 },

    // STATIONERIES
    { id: 63, name: 'Notebook (100 pages)', price: 2.99, category: 'stationary', img: '📓', rating: 4.3, reviews: 59, stock: 70 },
    { id: 64, name: 'Ballpoint Pens (12pk)', price: 4.99, category: 'stationary', img: '🖊️', rating: 4.4, reviews: 91, stock: 65 },
    { id: 65, name: 'Colored Pencils Set', price: 8.99, category: 'stationary', img: '✏️', rating: 4.5, reviews: 106, stock: 42 },
    { id: 66, name: 'A4 Copy Paper (500)', price: 5.99, category: 'stationary', img: '📄', rating: 4.2, reviews: 52, stock: 58 },
    { id: 67, name: 'Desk Organizer', price: 12.99, category: 'stationary', img: '📦', rating: 4.5, reviews: 84, stock: 34 },
    { id: 68, name: 'Sticky Notes Pack', price: 3.49, category: 'stationary', img: '📝', rating: 4.6, reviews: 98, stock: 62 },
    { id: 69, name: 'Highlighters (6pk)', price: 4.49, category: 'stationary', img: '🖍️', rating: 4.3, reviews: 67, stock: 48 },
    { id: 70, name: 'Folder Set', price: 6.99, category: 'stationary', img: '📁', rating: 4.4, reviews: 75, stock: 40 },

    // TOYS & SPORTS
    { id: 71, name: 'Lego Set (500 pieces)', price: 34.99, category: 'toys', img: '🧱', rating: 4.8, reviews: 158, stock: 22 },
    { id: 72, name: 'Board Game', price: 24.99, category: 'toys', img: '🎲', rating: 4.5, reviews: 93, stock: 28 },
    { id: 73, name: 'Bicycle Helmet', price: 29.99, category: 'toys', img: '🚴', rating: 4.6, reviews: 109, stock: 19 },
    { id: 74, name: 'Soccer Ball', price: 14.99, category: 'toys', img: '⚽', rating: 4.4, reviews: 86, stock: 36 },
    { id: 75, name: 'Basketball', price: 19.99, category: 'toys', img: '🏀', rating: 4.5, reviews: 104, stock: 30 },
    { id: 76, name: 'Skateboard', price: 49.99, category: 'toys', img: '🛹', rating: 4.7, reviews: 120, stock: 12 },
    { id: 77, name: 'Roller Skates', price: 44.99, category: 'toys', img: '🛼', rating: 4.6, reviews: 101, stock: 14 },
    { id: 78, name: 'Action Figure', price: 9.99, category: 'toys', img: '🦸', rating: 4.3, reviews: 66, stock: 48 },

    // GADGETS & ELECTRONICS
    { id: 79, name: 'USB-C Cable', price: 8.99, category: 'gadgets', img: '🔌', rating: 4.5, reviews: 137, stock: 75 },
    { id: 80, name: 'Wireless Charger', price: 19.99, category: 'gadgets', img: '🔌', rating: 4.7, reviews: 147, stock: 32 },
    { id: 81, name: 'Bluetooth Speaker', price: 34.99, category: 'gadgets', img: '🔊', rating: 4.6, reviews: 131, stock: 24 },
    { id: 82, name: 'Phone Screen Protector', price: 4.99, category: 'gadgets', img: '📱', rating: 4.3, reviews: 71, stock: 68 },
    { id: 83, name: 'Wireless Earbuds', price: 49.99, category: 'gadgets', img: '🎧', rating: 4.8, reviews: 165, stock: 19 },
    { id: 84, name: 'Power Bank', price: 24.99, category: 'gadgets', img: '🔋', rating: 4.7, reviews: 142, stock: 28 },
    { id: 85, name: 'LED Desk Lamp', price: 19.99, category: 'gadgets', img: '💡', rating: 4.5, reviews: 95, stock: 36 },
    { id: 86, name: 'Smart Watch', price: 99.99, category: 'gadgets', img: '⌚', rating: 4.8, reviews: 178, stock: 11 },
];

// Global Variables
let cart = [];
let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
let appliedCoupon = null;

// Promotional Coupons
const coupons = {
    'SAVE10': { discount: 10, type: 'percentage', minAmount: 50 },
    'SAVE20': { discount: 20, type: 'percentage', minAmount: 100 },
    'SUMMER': { discount: 15, type: 'percentage', minAmount: 75 },
    'WELCOME': { discount: 5, type: 'percentage', minAmount: 30 },
    'SAVE5': { discount: 5, type: 'fixed', minAmount: 0 }
};

// --- 2. SHOP & PRODUCT LOGIC ---

// Initialize page on load
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('productGrid')) {
        displayProducts(products);
    }
});

function displayProducts(items) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    
    grid.innerHTML = items.map(product => `
        <div class="product-card">
            <div class="img">${product.img}</div>
            <h3>${product.name}</h3>
            <div class="rating">
                <span class="stars">★ ${product.rating}</span>
                <span class="reviews">(${product.reviews})</span>
            </div>
            <div class="stock-status ${product.stock > 20 ? 'in-stock' : 'low-stock'}">
                ${product.stock > 20 ? '✓ In Stock' : '⚠ Low Stock (' + product.stock + ')'}
            </div>
            <p class="price">$${product.price.toFixed(2)}</p>
            <div class="product-actions">
                <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                <button class="wishlist-btn" onclick="toggleWishlist(${product.id})">♡</button>
            </div>
        </div>
    `).join('');
}

const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = products.filter(p => p.name.toLowerCase().includes(term));
        displayProducts(filtered);
    });
}

function filterProducts(cat, btn) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    if (cat === 'all') return displayProducts(products);
    const filtered = products.filter(p => p.category === cat);
    displayProducts(filtered);
}

// --- PRICE RANGE FILTER ---

function updatePriceDisplay() {
    const minInput = document.getElementById('minPrice');
    const maxInput = document.getElementById('maxPrice');
    const priceMin = document.getElementById('priceMin');
    const priceMax = document.getElementById('priceMax');
    
    if (minInput && maxInput && priceMin && priceMax) {
        const minVal = parseInt(minInput.value) || 0;
        const maxVal = parseInt(maxInput.value) || 200;
        
        priceMin.textContent = minVal;
        priceMax.textContent = maxVal;
        
        filterByPrice(minVal, maxVal);
    }
}

function filterByPrice(minVal, maxVal) {
    const filtered = products.filter(p => p.price >= minVal && p.price <= maxVal);
    displayProducts(filtered);
}

// Add event listeners for price inputs
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const priceRangeSlider = document.getElementById('priceRange');

if (minPriceInput) minPriceInput.addEventListener('input', updatePriceDisplay);
if (maxPriceInput) maxPriceInput.addEventListener('input', updatePriceDisplay);
if (priceRangeSlider) {
    priceRangeSlider.addEventListener('input', () => {
        const val = priceRangeSlider.value;
        if (maxPriceInput) maxPriceInput.value = val;
        updatePriceDisplay();
    });
}

// --- TOGGLE SIDEBAR MENU ---

function toggleSidebar() {
    const sidebar = document.querySelector('.filter-sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (sidebar && overlay) {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('show');
    }
}

function closeSidebar() {
    const sidebar = document.querySelector('.filter-sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (sidebar && overlay) {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
    }
}

// --- 4. CART OPERATIONS ---

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    showToast(`${product.name} added to basket!`);
}

function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');

    if (cartCount) cartCount.innerText = cart.reduce((acc, item) => acc + item.quantity, 0);
    
    if (cartItems) {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item" style="display:flex; justify-content:space-between; margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:10px;">
                <div>
                    <strong>${item.name}</strong><br>
                    ${item.quantity} x $${item.price.toFixed(2)}
                </div>
                <button onclick="removeFromCart(${item.id})" style="border:none; color:#e74c3c; cursor:pointer; background:none; font-weight:bold;">Remove</button>
            </div>
        `).join('');
    }

    let total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    
    if (appliedCoupon) {
        const couponData = coupons[appliedCoupon];
        if (total >= couponData.minAmount) {
            if (couponData.type === 'percentage') {
                total = total * (1 - couponData.discount / 100);
            } else {
                total = total - couponData.discount;
            }
        }
    }
    
    if (cartTotal) cartTotal.innerText = `$${total.toFixed(2)}`;
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    if (sidebar) sidebar.classList.toggle('open');
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        alert('Please login first!');
        toggleAuthModal();
        return;
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'payment.html';
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.innerText = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
    }
}

// --- 5. WISHLIST ---

function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('Removed from wishlist');
    } else {
        wishlist.push(productId);
        showToast('Added to wishlist!');
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistButton(productId);
}

function updateWishlistButton(productId) {
    const btn = document.querySelector(`button[onclick="toggleWishlist(${productId})"]`);
    if (btn) {
        btn.style.color = wishlist.includes(productId) ? '#e74c3c' : '#ddd';
    }
}

// --- 6. COUPON SYSTEM ---

function applyCoupon(code) {
    code = code.toUpperCase();
    if (coupons[code]) {
        appliedCoupon = code;
        updateCartUI();
        showToast(`Coupon ${code} applied! Save $${getCouponDiscount()}`);
        localStorage.setItem('appliedCoupon', code);
    } else {
        showToast('Invalid coupon code!');
    }
}

function getCouponDiscount() {
    if (!appliedCoupon) return 0;
    let total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const coupon = coupons[appliedCoupon];
    if (total >= coupon.minAmount) {
        return coupon.type === 'percentage' ? total * coupon.discount / 100 : coupon.discount;
    }
    return 0;
}

// Load coupon from localStorage
window.addEventListener('DOMContentLoaded', () => {
    appliedCoupon = localStorage.getItem('appliedCoupon');
    wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
});
