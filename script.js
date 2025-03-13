function initMap() {
    const location = new naver.maps.LatLng(33.4996, 126.5312); // 제주도 좌표

    const map = new naver.maps.Map("map-container", {
        center: location,
        zoom: 12
    });

    new naver.maps.Marker({
        position: location,
        map: map
    });
}

window.onload = initMap; // 페이지 로드 후 실행
