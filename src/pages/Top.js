import React from 'react';
import {Link} from "react-router-dom";

const Top = () => {
    return (
        <div>
            <h2>Top Page</h2>
            <Link to={"/habits/new"}>登録ページ</Link>
        </div>
    );
};

export default Top;
