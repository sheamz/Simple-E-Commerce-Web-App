import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import NavBarHome from '../component/NavBarHome';
import MyShopNav from '../component/MyShopNav';
import 'chart.js/auto'; // Required for Chart.js

const SellerDashboard = () => {
    // Mock data for charts
    const salesData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Sales ($)',
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
                label: 'Revenue ($)',
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

    return (
        <div>
            <NavBarHome />
            <MyShopNav />
            <div className="container mt-4">
                <h1>Seller Dashboard</h1>
                <p>Welcome to your dashboard. Manage your products and view your sales here.</p>

                {/* Overview Section */}
                <div className="row mb-4">
                    <div className="col-md-4">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Total Sales</h5>
                                <p className="card-text">$4,500</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Total Revenue</h5>
                                <p className="card-text">$12,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Total Orders</h5>
                                <p className="card-text">150</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Performance Insights */}
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
                        <div className="card">
                            <div className="card-header">Best Selling Books</div>
                            <div className="card-body">
                                <Pie data={bestSellingBooksData} />
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