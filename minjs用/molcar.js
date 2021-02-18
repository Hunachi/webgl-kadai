window.addEventListener("DOMContentLoaded", main);

function main() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const debug = false;

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#myCanvas")
    });
    // renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    floor();
    molucar(0, 0, 0);
    snow();
    light();
    set_camera();

    // カメラ
    function set_camera() {
        const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
        camera.position.set(0, 0, +1000);

        renderer.render(scene, camera);

        loop();
        var t = 0;
        var t_y = 0;
        var interval = 1000;
        var t_state = 0;
        function loop() {
            requestAnimationFrame(loop);

            if (debug) {
                camera.position.x = 500 * Math.sin(Math.PI * 0.5);
                camera.position.y = 0;
                camera.position.z = 500 * Math.cos(Math.PI * 0.5);
            } else {
                camera.position.x = 500 * Math.sin(-2 * Math.PI * t / interval);
                camera.position.y = -100 + 500 * Math.sin(Math.PI * t_y / (interval * 4));
                camera.position.z = 100 + 500 * Math.cos(-2 * Math.PI * t / interval);
            }

            //原点方向を見つめる
            camera.lookAt(new THREE.Vector3(0, 0, 0));

            // レンダリング
            renderer.render(scene, camera);

            t++;
            t_y++;
            if (t > interval) {
                t_state = (t_state + 1) % 2;
                t = 0;
            }
            if (t_y > interval * 4) {
                t_y = 0;
            }
        }
    }

    function light() {
        const light = new THREE.DirectionalLight(0xffffff, 0.6);
        light.position.set(-500, 100, 0);
        scene.add(light);
        const light1 = new THREE.DirectionalLight(0xffffff, 0.6);
        light1.position.set(0, 1000, 0);
        scene.add(light1);

        var t = 0;
        var interval = 555;
        loop();
        function loop() {
            requestAnimationFrame(loop);

            light.position.x = -500 * Math.sin(-2 * Math.PI * t / interval);
            light.position.y = 100;
            light.position.z = 100 + 500 * Math.cos(-2 * Math.PI * t / interval);

            //原点方向を見つめる
            light.lookAt(new THREE.Vector3(0, 0, 0));

            t++;
            if (t > interval) {
                t = 0;
            }
        }
    }

    function snow() {
        var snows = [];
        var snownum = 400;
        const gsnow = new THREE.SphereGeometry(2, 10, 10);
        const msnow = new THREE.MeshLambertMaterial({ color: 0x00ffff });

        for (var i = 0; i < snownum; i++) {
            const snow = new THREE.Mesh(gsnow, msnow);
            snow.position.x = Math.random() * 2000 - 1000;
            snow.position.y = Math.random() * 2000 - 1000;
            snow.position.z = Math.random() * 2000 - 1000;
            snow.scale.x = snow.scale.y = 1;
            scene.add(snow);

            snows.push(snow);
        }
        setInterval(loop, 1000 / 60);

        function loop() {

            for (var i = 0; i < snows.length; i++) {
                var snow = snows[i];
                with (snow.position) {
                    if (Math.random() % 2 == 0) {
                        x = x + 1;
                    } else {
                        x = x - 1;
                    }
                    y = y - 1;
                    if (y < -1000) y += 2000;
                    if (x > 1000) x -= 2000;
                    else if (x < -1000) x += 2000;
                    if (z > 1000) z -= 2000;
                    else if (z < -1000) z += 2000;
                }
            }
        }
    }

    function floor() {
        var gfloor = new THREE.PlaneGeometry(10000, 10000, 1, 1);
        var mfloor = new THREE.MeshLambertMaterial({ color: 0xe0ffff });
        var floor = new THREE.Mesh(gfloor, mfloor);
        floor.position.set(0, -99, 0);
        floor.rotation.x = Math.PI * 3 / 2;
        scene.add(floor);
    }

    function molucar(size, position_offset_x, position_oddset_y) {
        const molucar_object = [];
        // 胴体を作成
        const gbody = new THREE.SphereGeometry(100, 500, 500);
        const mbody = new THREE.MeshLambertMaterial({ color: 0xF2D5AD });
        const body0 = new THREE.Mesh(gbody, mbody);
        body0.position.set(-50, 0, 100);
        body0.castShadow = true;
        scene.add(body0);
        const body1 = new THREE.Mesh(gbody, mbody);
        body1.position.set(50, 0, 100);
        body1.castShadow = true;
        scene.add(body1);
        const gbodycyl = new THREE.CylinderGeometry(100, 100, 100, 50);
        const mbodycyl = new THREE.MeshLambertMaterial({ color: 0xF2D5AD });
        const bodycyl = new THREE.Mesh(gbodycyl, mbodycyl);
        bodycyl.position.set(0, 0, 100)
        bodycyl.rotation.x = Math.PI / 2;
        bodycyl.rotation.z = Math.PI / 2;
        bodycyl.castShadow = true;
        scene.add(bodycyl);

        // ほっぺた
        const ghoppe = new THREE.SphereGeometry(40, 500, 500);
        const mhoppe = new THREE.MeshLambertMaterial({ color: 0xF2D5AD });
        const hoppe0 = new THREE.Mesh(ghoppe, mhoppe);
        hoppe0.position.set(120, -50, 60);
        scene.add(hoppe0);
        const hoppe1 = new THREE.Mesh(ghoppe, mhoppe);
        hoppe1.position.set(120, -50, 140);
        scene.add(hoppe1);
        const ghoppey = new THREE.CylinderGeometry(40, 40, 80, 50);
        const mhoppey = new THREE.MeshLambertMaterial({ color: 0xF2D5AD });
        const hoppey0 = new THREE.Mesh(ghoppey, mhoppey);
        hoppey0.position.set(120, -50, 100);
        hoppey0.rotation.x = Math.PI / 2;
        scene.add(hoppey0);
        const gkyokumen = new THREE.SphereGeometry(150, 500, 500, Math.PI / 2 + Math.PI / 120, Math.PI / 3 - Math.PI / 60, Math.PI / 4, Math.PI / 4);
        const mkyokumen = new THREE.MeshLambertMaterial({ color: 0xF2D5AD });
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
        const gcubebody = new THREE.BoxGeometry(30, 90, 110);
        const mcubebody = new THREE.MeshLambertMaterial({ color: 0xF2D5AD });
        const cubebody = new THREE.Mesh(gcubebody, mcubebody);
        cubebody.rotation.z = Math.PI / 8;
        cubebody.position.set(123.5, -5, 100);
        scene.add(cubebody);

        // タイヤ
        const gtaiya = new THREE.TorusGeometry(18, 12, 16, 100);
        const mtaiya = new THREE.MeshLambertMaterial({ color: 0x1F3818 });
        const taiya0 = new THREE.Mesh(gtaiya, mtaiya);
        const taiyas = new Array();
        for (i = 0; i < 4; i++) taiyas.push(new THREE.Mesh(gtaiya, mtaiya));
        taiyas[0].position.set(70, -70, 10);
        taiyas[1].position.set(-70, -70, 10);
        taiyas[2].position.set(70, -70, 190);
        taiyas[3].position.set(-70, -70, 190);
        for (i = 0; i < 4; i++) {
            taiyas[i].castShadow = true;
            scene.add(taiyas[i]);
        }

        const gtaiyaInside = new THREE.SphereGeometry(10, 50, 50);
        const mtaiyaInside = new THREE.MeshLambertMaterial({ color: 0xF0C135 });
        const taiyaInsides = new Array();
        for (i = 0; i < 4; i++) taiyaInsides.push(new THREE.Mesh(gtaiyaInside, mtaiyaInside));
        taiyaInsides[0].position.set(70, -70, 10);
        taiyaInsides[1].position.set(-70, -70, 10);
        taiyaInsides[2].position.set(70, -70, 190);
        taiyaInsides[3].position.set(-70, -70, 190);
        for (i = 0; i < 4; i++) scene.add(taiyaInsides[i]);

        // 目
        const gme = new THREE.SphereGeometry(20, 50, 50);
        const mme = new THREE.MeshLambertMaterial({ color: 0x110C06 });
        const me0 = new THREE.Mesh(gme, mme);
        me0.position.set(140, -10, 80);
        scene.add(me0);
        const me1 = new THREE.Mesh(gme, mme);
        me1.position.set(140, -10, 120);
        scene.add(me1);
        const gmehigh = new THREE.SphereGeometry(10, 50, 50);
        const mmehigh = new THREE.MeshLambertMaterial({ color: 0xAEA5A0 });
        const mehigh0 = new THREE.Mesh(gmehigh, mmehigh);
        mehigh0.position.set(149, -5, 81);
        scene.add(mehigh0);
        const mehigh1 = new THREE.Mesh(gmehigh, mmehigh);
        mehigh1.position.set(149, -5, 119);
        scene.add(mehigh1);

        // 耳
        const gmimi = new THREE.TorusGeometry(8, 10, 20, 100);
        const mmimi = new THREE.MeshLambertMaterial({ color: 0xF2D5AD });
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
        const mmadofront = new THREE.MeshLambertMaterial({ color: 0xB48166 });
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

        // 口と鼻
        const nosePoints = [];
        nosePoints.push(new THREE.Vector3(159, -30, 110));
        nosePoints.push(new THREE.Vector3(160, -40, 100));
        nosePoints.push(new THREE.Vector3(159, -30, 90));
        const mNose = new THREE.MeshLambertMaterial({ color: 0x84491D });
        const gnose = new THREE.BoxGeometry(2, 10, 0.5);
        const mnose = new THREE.MeshLambertMaterial({ color: 0xB48166 });
        const nose = new THREE.Mesh(gnose, mnose);
        nose.position.set(159, -37, 103);
        nose.rotation.x = Math.PI / 5;
        scene.add(nose);
        const nose0 = new THREE.Mesh(gnose, mnose);
        nose0.position.set(159, -37, 97);
        nose0.rotation.x = -Math.PI / 5;
        scene.add(nose0);
        const gmouth = new THREE.SphereGeometry(40, 100, 100, 0, Math.PI * 2, Math.PI / 2 - Math.PI / 720, Math.PI / 360);
        const mmouth = new THREE.MeshLambertMaterial({ color: 0xB48166 });
        const mouth = new THREE.Mesh(gmouth, mmouth);
        mouth.position.set(121, -50, 100);
        mouth.rotation.x = Math.PI / 2;
        scene.add(mouth);

        // アニメーション
        var t = 0;
        var t_taiya = 0;
        var taiya_state = 0;
        var interval = 25;

        loop();
        function loop() {
            requestAnimationFrame(loop);
            // taiya
            if (taiya_state == 0) {
                taiyas[0].rotation.x = (Math.PI / 2 * t_taiya / interval);
                taiyas[3].rotation.x = (Math.PI / 2 * t_taiya / -interval);
            } else if (taiya_state == 1) {
                taiyas[0].rotation.x = (Math.PI / 2 * (interval - t_taiya) / interval);
                taiyas[3].rotation.x = (Math.PI / 2 * (interval - t_taiya) / -interval);
            } else if (taiya_state == 2) {
                taiyas[1].rotation.x = (Math.PI / 2 * t_taiya / interval);
                taiyas[2].rotation.x = (Math.PI / 2 * t_taiya / -interval);
            } else if (taiya_state == 3) {
                taiyas[1].rotation.x = (Math.PI / 2 * (interval - t_taiya) / interval);
                taiyas[2].rotation.x = (Math.PI / 2 * (interval - t_taiya) / -interval);
            }

            t++;
            t_taiya++;
            if (t_taiya > interval) {
                t_taiya = 0;
                taiya_state++;
                taiya_state %= 4;
            }
        }
    }
}