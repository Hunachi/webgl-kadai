window.addEventListener("DOMContentLoaded", init);

function init() {
    const width = 960;
    const height = 540;

    // レンダラーを作成
    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#myCanvas")
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(
        45,
        width / height,
        1,
        10000
    );
    camera.position.set(0, 0, +1000);

    // 胴体を作成
    const gdoumaru = new THREE.SphereGeometry(100, 500, 500);
    const mdoumaru = new THREE.MeshBasicMaterial({ color: 0xF2D5AD });
    const doumaru0 = new THREE.Mesh(gdoumaru, mdoumaru);
    doumaru0.position.set(-50, 0, 100);
    scene.add(doumaru0);
    const doumaru1 = new THREE.Mesh(gdoumaru, mdoumaru);
    doumaru1.position.set(50, 0, 100);
    scene.add(doumaru1);
    const gdoudaen = new THREE.CylinderGeometry(100, 100, 100, 50);
    const mdoudaen = new THREE.MeshBasicMaterial({ color: 0xF2D5AD });
    const doudaen = new THREE.Mesh(gdoudaen, mdoudaen);
    doudaen.position.set(0, 0, 100)
    doudaen.rotation.x = Math.PI / 2;
    doudaen.rotation.z = Math.PI / 2;
    scene.add(doudaen);

    // ほっぺた
    const ghoppe = new THREE.SphereGeometry(40, 500, 500);
    const mhoppe = new THREE.MeshBasicMaterial({ color: 0xF2D5AD });
    const hoppe0 = new THREE.Mesh(ghoppe, mhoppe);
    hoppe0.position.set(120, -50, 60);
    scene.add(hoppe0);
    const hoppe1 = new THREE.Mesh(ghoppe, mhoppe);
    hoppe1.position.set(120, -50, 140);
    scene.add(hoppe1);
    const ghoppey = new THREE.CylinderGeometry(40, 40, 80, 50);
    const mhoppey = new THREE.MeshBasicMaterial({ color: 0xF2D5AD });
    const hoppey0 = new THREE.Mesh(ghoppey, mhoppey);
    hoppey0.position.set(120, -50, 100);
    hoppey0.rotation.x = Math.PI / 2;
    scene.add(hoppey0);

    const gkyokumen = new THREE.SphereGeometry(150, 500, 500, Math.PI / 2, Math.PI / 3, Math.PI / 4, Math.PI / 4);
    const mkyokumen = new THREE.MeshBasicMaterial({ color: 0xF2D5AD });
    const kyokumen = new THREE.Mesh(gkyokumen, mkyokumen);
    kyokumen.rotation.y = Math.PI / 3;
    kyokumen.position.set(10, -50, 100);
    scene.add(kyokumen);


    const hoppey1 = new THREE.Mesh(ghoppey, mhoppey);
    hoppey1.position.set(80, -48, 60);
    hoppey1.rotation.x = Math.PI / 2;
    hoppey1.rotation.z = Math.PI / 2 - Math.PI / 120;
    hoppey1.rotation.y = -Math.PI / 120;
    scene.add(hoppey1);
    const hoppey2 = new THREE.Mesh(ghoppey, mhoppey);
    hoppey2.position.set(80, -48, 140);
    hoppey2.rotation.x = Math.PI / 2;
    hoppey2.rotation.z = Math.PI / 2 + Math.PI / 120;
    hoppey2.rotation.y = -Math.PI / 120;
    scene.add(hoppey2);

    const gcubebody = new THREE.BoxGeometry(30, 90, 120);
    const mcubebody = new THREE.MeshBasicMaterial({ color: 0xF2D5AD });
    const cubebody = new THREE.Mesh(gcubebody, mcubebody);
    cubebody.rotation.z = Math.PI / 8;
    cubebody.position.set(123.5, -5, 100);
    scene.add(cubebody);

    // タイヤ
    const gtaiya = new THREE.TorusGeometry(18, 12, 16, 100);
    const mtaiya = new THREE.MeshBasicMaterial({ color: 0x1F3818 });
    const taiya0 = new THREE.Mesh(gtaiya, mtaiya);
    taiya0.position.set(70, -60, 0);
    scene.add(taiya0);
    const taiya1 = new THREE.Mesh(gtaiya, mtaiya);
    taiya1.position.set(-70, -60, 0);
    scene.add(taiya1);
    const taiya2 = new THREE.Mesh(gtaiya, mtaiya);
    taiya2.position.set(70, -60, 200);
    scene.add(taiya2);
    const taiya3 = new THREE.Mesh(gtaiya, mtaiya);
    taiya3.position.set(-70, -60, 200);
    scene.add(taiya3);
    const gtaiyaInside = new THREE.SphereGeometry(10, 50, 50);
    const mtaiyaInside = new THREE.MeshBasicMaterial({ color: 0xF0C135 });
    const taiyaInside0 = new THREE.Mesh(gtaiyaInside, mtaiyaInside);
    taiyaInside0.position.set(70, -60, 0);
    scene.add(taiyaInside0);
    const taiyaInside1 = new THREE.Mesh(gtaiyaInside, mtaiyaInside);
    taiyaInside1.position.set(-70, -60, 0);
    scene.add(taiyaInside1);
    const taiyaInside2 = new THREE.Mesh(gtaiyaInside, mtaiyaInside);
    taiyaInside2.position.set(70, -60, 200);
    scene.add(taiyaInside2);
    const taiyaInside3 = new THREE.Mesh(gtaiyaInside, mtaiyaInside);
    taiyaInside3.position.set(-70, -60, 200);
    scene.add(taiyaInside3);

    // 目
    const gme = new THREE.SphereGeometry(20, 50, 50);
    const mme = new THREE.MeshBasicMaterial({ color: 0x110C06 });
    const me0 = new THREE.Mesh(gme, mme);
    me0.position.set(140, -10, 80);
    scene.add(me0);
    const me1 = new THREE.Mesh(gme, mme);
    me1.position.set(140, -10, 120);
    scene.add(me1);
    const gmehigh = new THREE.SphereGeometry(10, 50, 50);
    const mmehigh = new THREE.MeshBasicMaterial({ color: 0xAEA5A0 });
    const mehigh0 = new THREE.Mesh(gmehigh, mmehigh);
    mehigh0.position.set(149, -5, 80);
    scene.add(mehigh0);
    const mehigh1 = new THREE.Mesh(gmehigh, mmehigh);
    mehigh1.position.set(149, -5, 120);
    scene.add(mehigh1);

    // 耳
    const gmimi = new THREE.TorusGeometry(8, 10, 20, 100);
    const mmimi = new THREE.MeshBasicMaterial({ color: 0xF2D5AD });
    const mimi0 = new THREE.Mesh(gmimi, mmimi);
    mimi0.position.set(100, 25, 10);
    mimi0.rotation.x = Math.PI / 2;
    mimi0.rotation.z = Math.PI / 2;
    scene.add(mimi0);
    const mimi1 = new THREE.Mesh(gmimi, mmimi);
    mimi1.rotation.x = Math.PI / 2;
    mimi1.rotation.z = Math.PI / 2;
    mimi1.position.set(100, 25, 190);
    scene.add(mimi1);

    // 窓
    const gmadofront = new THREE.SphereGeometry(100, 500, 500, Math.PI / 3 + Math.PI / 9, 2 * Math.PI / 3 - 2 * Math.PI / 9, (Math.PI) / 4, Math.PI / 7);
    const mmadofront = new THREE.MeshBasicMaterial({ color: 0xB48166 });
    const madofront0 = new THREE.Mesh(gmadofront, mmadofront);
    madofront0.rotation.y = Math.PI / 3;
    madofront0.rotation.z = Math.PI / 120;
    madofront0.position.set(51, 0, 100);
    scene.add(madofront0);
    const madofront1 = new THREE.Mesh(gmadofront, mmadofront);
    madofront1.rotation.y = Math.PI / 3 + Math.PI;
    madofront1.rotation.z = Math.PI / 120;
    madofront1.position.set(-51, 0, 100);
    scene.add(madofront1);
    // radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float
    const gmadoSide = new THREE.CylinderGeometry(101, 101, 140, 100, 10, true, 0, Math.PI / 7);
    const mmadoSide = new THREE.MeshBasicMaterial({ color: 0xB48166 });
    const madoSide0 = new THREE.Mesh(gmadoSide, mmadoSide);
    madoSide0.position.set(0, 0, 100)
    madoSide0.rotation.x = - Math.PI / 10;
    madoSide0.rotation.z = Math.PI / 2;
    scene.add(madoSide0);
    const madoSide1 = new THREE.Mesh(gmadoSide, mmadoSide);
    madoSide1.position.set(0, 0, 100)
    madoSide1.rotation.x = Math.PI + Math.PI / 10 + Math.PI / 7;
    madoSide1.rotation.z = Math.PI / 2;
    scene.add(madoSide1);

    // 口と鼻
    const nosePoints = [];
    nosePoints.push(new THREE.Vector3(159, -30, 110));
    nosePoints.push(new THREE.Vector3(160, -40, 100));
    nosePoints.push(new THREE.Vector3(159, -30, 90));
    const mNose = new THREE.LineBasicMaterial({ color: 0x84491D });
    const gNose = new THREE.BufferGeometry().setFromPoints(nosePoints);
    const nose = new THREE.Line(gNose, mNose);
    scene.add(nose);
    const gmouth = new THREE.SphereGeometry(40, 100, 100, 0, Math.PI * 2, Math.PI/2 - Math.PI/360, Math.PI/180);
    const mmouth = new THREE.MeshBasicMaterial({ color: 0xB48166 });
    const mouth = new THREE.Mesh(gmouth, mmouth);
    mouth.position.set(121, -50, 100);
    mouth.rotation.x = Math.PI / 2;
    scene.add(mouth);

    // 平行光源
    const directionalLight = new THREE.DirectionalLight(
        0xffffff
    );
    directionalLight.position.set(1, 1, 1);
    // シーンに追加
    scene.add(directionalLight);

    // 初回実行
    renderer.render(scene, camera);

    // 初回実行
    tick();

    var t = 0;
    function tick() {
        requestAnimationFrame(tick);
         camera.position.x = 500 * Math.sin(Date.now() / 1000); //500; //
         camera.position.y = 0;
         camera.position.z = 500 * Math.cos(Date.now() / 1000); //100; //
        // camera.position.x = 500 * Math.sin(Math.PI * 1);
        // camera.position.y = 0;
        // camera.position.z = 500 * Math.cos(Math.PI * 1);
        //原点方向を見つめる
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        t++;
        //camera.position.set(100 * Math.cos(t / 100), 0 ,  0 * Math.cos(t / 50));

        // レンダリング
        renderer.render(scene, camera);
    }
}