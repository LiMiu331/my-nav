//初始化数据
var keys ={
    '0':['q','w','e','r','t','y','u','i','o','p'],
    '1':['a','s','d','f','g','h','j','k','l'],
    '2':['z','x','c','v','b','n','m'],
    length:3
}
var hash={
    'q':'qq.com',
    'w':'weibo.com',
    'e':'yahoo.com',
    'r':'runoob.com',
    't':'tencent.com',
    'y':'yy.com',
    'u':'uc.cn',
    'i':'iqiyi.com',
    'o':'oppo.com',
}
var hashINlocalstorage = JSON.parse(localStorage.getItem('info')||'null')
if (hashINlocalstorage){
    hash = hashINlocalstorage
}

//生成键盘
var index = 0
while(index < keys['length']){
    var div = document.createElement('div')
    main1.appendChild(div)
    var row = keys[index]
    var index2 = 0
    while(index2 < row['length']){
        var span =document.createElement('span')
        var kbd = document.createElement('kbd')
        var img = document.createElement('img')
        if(hash[row[index2]]){
            img.src = 'http://www.'+hash[row[index2]] + '/favicon.ico'
            }else{
                img.src='./dot.png'
            }
        img.onerror = function(xxx){
            xxx.target.src = './dot.png'
        }
        kbd.appendChild(span)
        div.appendChild(kbd)
        span.textContent = row[index2]
        span.className = "text"
        var button = document.createElement('button')
        kbd.appendChild(button)
        button.textContent = '编辑'
        button.id = row[index2]
        kbd.appendChild(img)
        button.onclick = function(presskey){
            button2 =  presskey.target
            img2 =  button2.nextSibling
            var key = button2.id
            var revisewebsite = prompt('请输入你要修改的网站')
            hash[key] = revisewebsite
            img2.src = 'http://www.'+   revisewebsite + '/favicon.ico'
            localStorage.setItem('info',JSON.stringify(hash))
            img2.onerror = function(xxx){
            xxx.target.src = './dot.png'
        }
        
        }
        index2 = index2 + 1
    }
    index = index + 1
}
//监听键盘
document.onkeypress = function(presskey){
   var key = presskey['key']
   website = hash[key]
   window.open('http://www.' + website,'_blank')
}
