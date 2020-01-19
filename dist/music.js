const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "年少有为",
        artist: '李荣浩',
        url: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_47502984&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579452391348&di=9d3fe4eb362a07f785c2668b8c504d46&imgtype=0&src=http%3A%2F%2Fp1.music.126.net%2F8nnGrPjpr_oCxTq6_Ac5qQ%3D%3D%2F109951163636915574.jpg',
      },
    ]
});
