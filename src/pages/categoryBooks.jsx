import React from 'react';
import { useLocation } from 'react-router-dom';
import Books from '../components/books';

const categoryData = {
    '/Mechanics-management': {
        name: 'كتب الإدارة الميكانيكا ',
        items: [
            { title: '  كتاب ميكانيك سيارات', pdf: './pdf/كتاب ميكانيك سيارات.pdf' },
            { title: '  كتاب محركات الديزل', pdf: './pdf/كتاب محركات الديزل.pdf' },
            { title: '  كتاب الميكانيكا', pdf: './pdf/كتاب الميكانيكا.pdf' },
            { title: '  كتاب كمبيوتر السيارات', pdf: './pdf/كتاب كمبيوتر السيارات.pdf' },
        ],
    },
    '/Electronics-management': {
        name: ' كتب الإدارة الكترونيات    ',
        items: [
            { title: '  الكتب الإدارة الكترونيات', pdf: './pdf/كتاب فحص العناصر الالكترنية.pdf' },
            { title: '   امن المعلومات', pdf: './pdf/امن المعلومات.pdf' },
            { title: '  اساسيات الكهرباء والالكترونيات  ', pdf: './pdf/اساسيات الكهرباء والالكترونيات.pdf' },
            { title: '   صيانة الجوالات ', pdf: './pdf/صيانة_الجوالات.pdf' },
        ],
    },
    '/Office-administration': {
        name: ' كتب الإدارة المكتبية     ',
        items: [
            { title: '  مقدمة في الإدارة المكتبية', pdf: './pdf/مقدمة في الإدارة المكتبية.pdf' },
            { title: '  كتاب الادارة المكتبية الحديثة', pdf: './pdf/كتاب الادارة المكتبية الحديثة.pdf' },
            { title: '  كتاب ادارة المعرفة', pdf: './pdf/كتاب ادارة المعرفة.pdf' },
            { title: '  كتاب الابداع', pdf: './pdf/كتاب الابداع.pdf' },
        ],
    },
    '/technical-support': {
        name: ' كتب الدعم الفني   ',
        items: [
            { title: '  تعلم الكمبيوتر', pdf: './pdf/تعلم الكمبيوتر.pdf' },
            { title: '  الدعم الفني و الصيانة', pdf: './pdf/الدعم الفني و الصيانة.pdf' },
            { title: '  الهاردوير', pdf: './pdf/الهاردوير.pdf' },
        ],
    },
};

function CategoryBooks() {
    const location = useLocation();
    const { name, items } = categoryData[location.pathname] || { name: '', items: [] };


    return <Books data={items} name={name} />;
}

export default CategoryBooks;
