import React, {useState} from 'react';
import {generateItems} from '../utils';
import Header from './Header';
import ItemList from './ItemList';
import ComplexForm from "./ComflexForm.tsx";
import NotificationSystem from "./NotificationSysyem.tsx";

const Layout: React.FC = () => {
    const [items] = useState(generateItems(10000));
    return (
        <div>
            <Header/>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 md:pr-4">
                        <ItemList items={items}/>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-4">
                        <ComplexForm/>
                    </div>
                </div>
            </div>
            <NotificationSystem/>
        </div>
    );
};

export default Layout;