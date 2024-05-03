import haversine from 'haversine';


export const changeFormatDate = (date) => {
    const myDate = new Date(date)
    const year = myDate.getFullYear();
    const month = ('0' + (myDate.getMonth() + 1)).slice(-2);
    const day = ('0' + myDate.getDate()).slice(-2);

    const formattedDate = year + '-' + month + '-' + day;
    return formattedDate
}

export const imageSize = (url, size) => {
    const result = url.replace('{size}', size)
    return result
}



export const calculateDistance = (hotel, cityCenter) => {3

    const distanceInMeters = haversine(hotel, cityCenter, { unit: 'km' }).toFixed(1);
    return distanceInMeters
};
