const a = document.getElementsByTagName('a');
a[11].style.color = 'red';
a[11].style.fontFamily = 'cursive';


function mobilemenu(){
    if (document.getElementById('mysidebar').style.display= 'block') {
        document.getElementById('mysidebar').style.display= 'none';

    }else{
        document.getElementById('mysidebar').style.display= 'block';
    }
    document.getElementById('toggle').addEventListener('click', mobilemenu);
}