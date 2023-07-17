function getmv(music_list ,obj) {
    let id = obj.id;
    let i = Number(id);
    // console.log(music_list[i].pic);
    // let data = {
    //     searchMusic: music_list[i].name + "_" + music_list[i].artist
    // }
    localStorage.setItem("mvSearch", music_list[i].name + "_" + music_list[i].artist)
    document.location.href = '../mvlist'
}