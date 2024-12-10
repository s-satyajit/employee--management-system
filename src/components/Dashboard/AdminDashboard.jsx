import React from "react";
import Header from "../other/Header";

const AdminDashboard = () => {
    return(
        <div className="h-screen w-full p-10" >
            <Header />

            <div>
                <form>
                    <h3>Task Title</h3>
                    <input type="text" placeholder="Make a UI design" />
                    <h3>Description</h3>
                    <textarea name="" id="" rows="10"></textarea>
                </form>
            </div>
        </div>
    )
}

export default AdminDashboard;