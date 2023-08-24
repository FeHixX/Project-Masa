import {map as createMap, tileLayer as createTitleLayers, icon as createIcon, marker as createMarker} from '../../vendor/leaflet';

const addContactsMap = () => {
  if (document.querySelector('#map')) {
    document.querySelector('#map').querySelector('picture').remove();

    const coordinate = [55.028527396640804, 82.92824989073691];
    const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const markerText = `
<p>г. Новосибирск, ул. Щетинкина 68, культурный центр «Бейт Менахем»</p>
<p>Номер телефона: <a href="tel:+796387687676">+7 963 876 876 76</a></p>
`;

    const map = createMap('map', {
      center: coordinate,
      zoom: 17,
      scrollWheelZoom: false,
    });

    const icon = createIcon({
      iconUrl: './img/svg/pin.svg',
      iconSize: [70, 70],
      iconAnchor: [40, 70],
    });

    createTitleLayers(url).addTo(map);
    createMarker(coordinate, {icon}).bindPopup(markerText).addTo(map);
  }
};

export {addContactsMap};
