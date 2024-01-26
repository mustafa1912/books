import React from 'react';
import { useLocation } from 'react-router-dom';
import Books from '../components/books';

const categoryData = {
    '/Mechanics-management': {
        name: ' الإدارة الميكانيكا ',
        items: [
            { title: '   ميكانيك سيارات', pdf: './pdf/كتاب ميكانيك سيارات.pdf' },
            { title: '   محركات الديزل', pdf: './pdf/كتاب محركات الديزل.pdf' },
            { title: '   الميكانيكا', pdf: './pdf/كتاب الميكانيكا.pdf' },
            { title: '   كمبيوتر السيارات', pdf: './pdf/كتاب كمبيوتر السيارات.pdf' },
        ],
    },
    '/Electronics-management': {
        name: '  الإدارة الالكترونيات     ',
        items: [
            { title: '   الإدارة الالكترونيات ', pdf: './pdf/كتاب فحص العناصر الالكترنية.pdf' },
            { title: '   امن المعلومات', pdf: './pdf/امن المعلومات.pdf' },
            { title: '  اساسيات الكهرباء و الالكترونيات   ', pdf: './pdf/اساسيات الكهرباء والالكترونيات.pdf' },
            { title: '   صيانة الجوالات ', pdf: './pdf/صيانة_الجوالات.pdf' },
        ],
    },
    '/Office-administration': {
        name: '  الإدارة المكتبية     ',
        items: [
            { title: '  مقدمة في الإدارة المكتبية', pdf: './pdf/مقدمة في الإدارة المكتبية.pdf' },
            { title: '   الادارة المكتبية الحديثة', pdf: './pdf/كتاب الادارة المكتبية الحديثة.pdf' },
            { title: '   ادارة المعرفة', pdf: './pdf/كتاب ادارة المعرفة.pdf' },
            { title: '   الابداع', pdf: './pdf/كتاب الابداع.pdf' },
        ],
    },
    '/technical-support': {
        name: '  الدعم الفني   ',
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
