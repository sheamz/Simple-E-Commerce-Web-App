import React, { useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import NavBarHome from '../component/NavBarHome';
import MyShopNav from '../component/MyShopNav';
import 'chart.js/auto'; // Required for Chart.js

const SellerDashboard = () => {
    const salesData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Sales (₱)',
                data: [500, 700, 800, 600, 900],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const revenueData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Revenue (₱)',
                data: [1000, 1200, 1500, 1300, 1700],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    const bestSellingBooksData = {
        labels: ['Book A', 'Book B', 'Book C', 'Book D', 'Book E'],
        datasets: [
            {
                label: 'Units Sold',
                data: [50, 70, 30, 90, 40],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ],
            },
        ],
    };

    const bestSellingBooksCategoryData = {
        labels: ['Fiction', 'Non-Fiction', 'Science', 'History', 'Fantasy'],
        datasets: [
            {
                label: 'Units Sold by Category',
                data: [120, 90, 60, 80, 100],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                ],
            },
        ],
    };

    const stockLevelsData = {
        labels: ['Book A', 'Book B', 'Book C', 'Book D', 'Book E'],
        datasets: [
            {
                label: 'Stock Levels',
                data: [20, 15, 10, 5, 25],
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
            },
        ],
    };

    const [filteredBestSellingBooksData, setFilteredBestSellingBooksData] = useState(bestSellingBooksData);

    const handleCategoryFilter = (category) => {
        if (category === 'all') {
            setFilteredBestSellingBooksData(bestSellingBooksData);
        } else {
            const filteredData = {
                ...bestSellingBooksData,
                labels: bestSellingBooksData.labels.filter((label, index) => label.includes(category)),
                datasets: [
                    {
                        ...bestSellingBooksData.datasets[0],
                        data: bestSellingBooksData.datasets[0].data.filter((_, index) =>
                            bestSellingBooksData.labels[index].includes(category)
                        ),
                    },
                ],
            };
            setFilteredBestSellingBooksData(filteredData);
        }
    };

    return (
        <div>
            <NavBarHome />
            <MyShopNav />
            <div className="container mt-4">
                <h1>Seller Dashboard</h1>
                <p>Welcome to your dashboard. Manage your products and view your sales here.</p>

                <div className="row mb-4">
                    <div className="col-md-4">
                        <div className="card text-center" style={{ backgroundColor: '#f3e5f5' }}> 
                            <div className="card-body">
                                <h5 className="card-title">Total Sales</h5>
                                <p className="card-text">₱4,500</p> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center" style={{ backgroundColor: '#f3e5f5' }}> 
                            <div className="card-body">
                                <h5 className="card-title">Total Revenue</h5>
                                <p className="card-text">₱12,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center" style={{ backgroundColor: '#f3e5f5' }}> 
                            <div className="card-body">
                                <h5 className="card-title">Total Orders</h5>
                                <p className="card-text">150</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-header">Sales Over Time</div>
                            <div className="card-body">
                                <Bar data={salesData} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-header">Revenue Over Time</div>
                            <div className="card-body">
                                <Line data={revenueData} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card" style={{ height: '380px' }}> 
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <span>Best Selling Books</span>
                                <select
                                    className="form-select form-select-sm"
                                    style={{ width: '150px' }}
                                    onChange={(e) => handleCategoryFilter(e.target.value)}
                                >
                                    <option value="all">All Categories</option>
                                    <option value="fiction">Fiction</option>
                                    <option value="non-fiction">Non-Fiction</option>
                                    <option value="science">Science</option>
                                    <option value="history">History</option>
                                </select>
                            </div>
                            <div className="card-body d-flex flex-row justify-content-around align-items-center"> 
                                <div style={{ width: '45%', height: '70%' }}> 
                                    <Pie data={filteredBestSellingBooksData} />
                                </div>
                                <div style={{ width: '45%', height: '70%' }}> 
                                    <Pie data={bestSellingBooksCategoryData} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-header">Stock Levels</div>
                            <div className="card-body">
                                <Bar data={stockLevelsData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerDashboard;