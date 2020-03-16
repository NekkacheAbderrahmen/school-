const a =document.querySelector('#std_tab');
const prt =document.querySelector("#prt_tab");
const intrst =document.querySelector("#intrs_tab");
const pack =document.querySelector("#pack_tab");
const seance =document.querySelector("#seance_tab");
const teachers_tab =document.querySelector("#teachers_tab");

function std_diplay(doc){
    let b =document.createElement('tr');
    let c =document.createElement("th");
    let d =document.createElement("th");
    let e =document.createElement("th");
    let f =document.createElement("th");


    b.appendChild(c);
    b.appendChild(d);
    b.appendChild(e);
    b.appendChild(f);
    
    a.appendChild(b);  

    b.setAttribute("class","row");
    b.setAttribute("id","tr_styling")
    c.setAttribute("data-id",doc.id);
    c.setAttribute("class","col-sm-3");
    d.setAttribute("data-id",doc.id);
    d.setAttribute("class","col-sm-3");
    e.setAttribute("data-id",doc.id);
    e.setAttribute("class","col-sm-3");
    f.setAttribute("data-id",doc.id);
    f.setAttribute("class","col-sm-3");

    c.textContent=doc.data().name;
    d.textContent=doc.data().age;
    e.textContent=doc.data().speciality;
    f.textContent=doc.data().level;
}

function parental_diplay(doc){
    var tag_=document.createElement('tr');
    var name=document.createElement('th');
    var student=document.createElement('th');
    var tel=document.createElement('th');
    var adress=document.createElement('th');

    prt.appendChild(tag_)
    tag_.appendChild(name);
    tag_.appendChild(student);
    tag_.appendChild(tel);
    tag_.appendChild(adress);

    tag_.setAttribute("class","row");
    tag_.setAttribute("id","tr_styling")
    name.setAttribute("data-id",doc.id);
    name.setAttribute("class","col-sm-3");
    student.setAttribute("data-id",doc.id);
    student.setAttribute("class","col-sm-3");
    tel.setAttribute("data-id",doc.id);
    tel.setAttribute("class","col-sm-3");
    adress.setAttribute("data-id",doc.id);
    adress.setAttribute("class","col-sm-3");

    name.textContent=doc.data().name;
    student.textContent=doc.data().student;
    tel.textContent=doc.data().tel;
    adress.textContent=doc.data().adress;


}

function intresting_diplay(doc){
    var tag_=document.createElement('tr');
    var name=document.createElement('th');
    var season=document.createElement('th');

    intrst.appendChild(tag_)
    tag_.appendChild(name);
    tag_.appendChild(season);

    tag_.setAttribute("class","row");
    tag_.setAttribute("id","tr_styling")
    name.setAttribute("data-id",doc.id);
    name.setAttribute("class","col-sm-6");
    season.setAttribute("data-id",doc.id);
    season.setAttribute("class","col-sm-6");

    name.textContent=doc.data().name;
    season.textContent=doc.data().season;
}

function pack_display(doc){
    var tag_=document.createElement('tr');
    var name=document.createElement('th');
    var b_date=document.createElement('th');
    var f_date=document.createElement('th');
    var module=document.createElement('th');

    pack.appendChild(tag_)
    tag_.appendChild(name);
    tag_.appendChild(b_date);
    tag_.appendChild(f_date);
    tag_.appendChild(module);

    tag_.setAttribute("class","row");
    tag_.setAttribute("id","tr_styling")
    name.setAttribute("data-id",doc.id);
    name.setAttribute("class","col-sm-3");
    b_date.setAttribute("data-id",doc.id);
    b_date.setAttribute("class","col-sm-3");
    f_date.setAttribute("data-id",doc.id);
    f_date.setAttribute("class","col-sm-3");
    module.setAttribute("data-id",doc.id);
    module.setAttribute("class","col-sm-3");

    name.textContent=doc.data().name;
    b_date.textContent=doc.data().began_date;
    f_date.textContent=doc.data().finale_date;
    module.textContent=doc.data().module;


}

function seance_display(doc){

    var tag_=document.createElement('tr');
    var mod_name=document.createElement('th');
    var t_name=document.createElement('th');
    var date_h=document.createElement('th');

    seance.appendChild(tag_)
    tag_.appendChild(mod_name);
    tag_.appendChild(t_name);
    tag_.appendChild(date_h);

    tag_.setAttribute("class","row");
    tag_.setAttribute("id","tr_styling")
    mod_name.setAttribute("data-id",doc.id);
    mod_name.setAttribute("class","col-sm-4");
    t_name.setAttribute("data-id",doc.id);
    t_name.setAttribute("class","col-sm-4");
    date_h.setAttribute("data-id",doc.id);
    date_h.setAttribute("class","col-sm-4");
    

    mod_name.textContent=doc.data().module_name;
    t_name.textContent=doc.data().teacher_name;
    date_h.textContent=doc.data().date_hour;

}

function teachers_display(doc){
    var tag_=document.createElement('tr');
    var t_name=document.createElement('th');
    var mod_name=document.createElement('th');

    teachers_tab.appendChild(tag_)
    tag_.appendChild(t_name);
    tag_.appendChild(mod_name);
    tag_.setAttribute("class","row");
    tag_.setAttribute("id","tr_styling");
    t_name.setAttribute("class","col-sm-6");
    mod_name.setAttribute("class","col-sm-6");

    t_name.setAttribute("data-id",doc.id);
    mod_name.setAttribute("data-id",doc.id);
    t_name.textContent=doc.data().name;
    mod_name.textContent=doc.data().module;
}





db.collection('students').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        std_diplay(doc);
    });
});

db.collection('parental').get().then(snapshot =>{
    snapshot.docs.forEach(doc=>{
        parental_diplay(doc);
    });

});

db.collection('intresting').get().then(snapshot =>{
    snapshot.docs.forEach(doc=>{
        intresting_diplay(doc);
    });

});

db.collection('pack').get().then(snapshot =>{
    snapshot.docs.forEach(doc=>{
        pack_display(doc);
    });

});

db.collection('seance').get().then(snapshot =>{
    snapshot.docs.forEach(doc=>{
        seance_display(doc);
    });

});

db.collection('teachers').get().then(snapshot =>{
    snapshot.docs.forEach(doc=>{
        teachers_display(doc);
    });

});







