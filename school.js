const a =document.querySelector('#std_tab');
const prt =document.querySelector("#prt_tab");
const intrst =document.querySelector("#intrs_tab");
const pack =document.querySelector("#pack_tab");
const seance =document.querySelector("#seance_tab");
const teachers_tab =document.querySelector("#teachers_tab");
const std_adding=document.querySelector("#std_submit");
const std_cli=document.querySelector("#std_click");
const parental_form=document.querySelector("#parental_form");
const parental_button=document.querySelector("#parental_button");
const pack_form=document.querySelector('#pack_form');
const pack_button=document.querySelector('#pack_button');
const intrestnig_form=document.querySelector("#intrestin_form");
const intresting_button=document.querySelector("#intresting_button");
const seance_form=document.querySelector("#seance_form");
const seance_button=document.querySelector("#seance_button");
const teachers_form=document.querySelector("#teachers_form");
const teachers_button=document.querySelector("#teachers_button");

function std_diplay(doc){
    let b =document.createElement('tr');
    let c =document.createElement("th");
    let d =document.createElement("th");
    let e =document.createElement("th");
    let f =document.createElement("th");
    let del=document.createElement("button");


    b.appendChild(c);
    b.appendChild(d);
    b.appendChild(e);
    b.appendChild(f);
    b.appendChild(del);
    a.appendChild(b);  

    b.setAttribute("class","row");
    b.setAttribute("id","tr_styling");
    b.setAttribute("data-id",doc.id)
    c.setAttribute("data-id",doc.id);
    c.setAttribute("class","col-sm-3");
    d.setAttribute("data-id",doc.id);
    d.setAttribute("class","col-sm-3");
    e.setAttribute("data-id",doc.id);
    e.setAttribute("class","col-sm-3");
    f.setAttribute("data-id",doc.id);
    f.setAttribute("class","col-sm-3");
    del.setAttribute("class","del_button");

    c.textContent=doc.data().name;
    d.textContent=doc.data().age;
    e.textContent=doc.data().speciality;
    f.textContent=doc.data().level;
    del.textContent="Delete";

    del.addEventListener('click', (event_obj_inf) => {
        let id = event_obj_inf.target.parentElement.getAttribute('data-id');
        db.collection('students').doc(id).delete();
    });
}


function parental_diplay(doc){
    var tag_=document.createElement('tr');
    var name=document.createElement('th');
    var student=document.createElement('th');
    var tel=document.createElement('th');
    var adress=document.createElement('th');
    var del=document.createElement("button");

    prt.appendChild(tag_)
    tag_.appendChild(name);
    tag_.appendChild(student);
    tag_.appendChild(tel);
    tag_.appendChild(adress);
    tag_.append(del);

    tag_.setAttribute("class","row");
    tag_.setAttribute("id","tr_styling");
    tag_.setAttribute("data-id",doc.id);
    name.setAttribute("data-id",doc.id);
    name.setAttribute("class","col-sm-3");
    student.setAttribute("data-id",doc.id);
    student.setAttribute("class","col-sm-3");
    tel.setAttribute("data-id",doc.id);
    tel.setAttribute("class","col-sm-3");
    adress.setAttribute("data-id",doc.id);
    adress.setAttribute("class","col-sm-3");
    del.setAttribute("class","del_button");

    name.textContent=doc.data().name;
    student.textContent=doc.data().student;
    tel.textContent=doc.data().tel;
    adress.textContent=doc.data().adress;
    del.textContent="Delete";

    del.addEventListener('click', (event_obj_inf) => {
        let id = event_obj_inf.target.parentElement.getAttribute('data-id');
        db.collection('parental').doc(id).delete();
    });


}

function intresting_diplay(doc){
    var tag_=document.createElement('tr');
    var name=document.createElement('th');
    var season=document.createElement('th');
    var del=document.createElement("button");

    intrst.appendChild(tag_)
    tag_.appendChild(name);
    tag_.appendChild(season);
    tag_.appendChild(del);

    tag_.setAttribute("class","row");
    tag_.setAttribute("id","tr_styling");
    tag_.setAttribute("data-id",doc.id);
    name.setAttribute("data-id",doc.id);
    name.setAttribute("class","col-sm-6");
    season.setAttribute("data-id",doc.id);
    season.setAttribute("class","col-sm-6");
    del.setAttribute("class","del_button");

    name.textContent=doc.data().name;
    season.textContent=doc.data().season;
    del.textContent="Delete";

    del.addEventListener("click",(event_obj_inf)=>{
        var data_id=event_obj_inf.target.parentElement.getAttribute("data-id");
        db.collection('intresting').doc(data_id).delete();
    })
}

function pack_display(doc){
    var tag_=document.createElement('tr');
    var name=document.createElement('th');
    var b_date=document.createElement('th');
    var f_date=document.createElement('th');
    var module=document.createElement('th');
    var del=document.createElement("button");

    pack.appendChild(tag_)
    tag_.appendChild(name);
    tag_.appendChild(b_date);
    tag_.appendChild(f_date);
    tag_.appendChild(module);
    tag_.appendChild(del);

    tag_.setAttribute("class","row");
    tag_.setAttribute("id","tr_styling");
    tag_.setAttribute("data-id",doc.id);
    name.setAttribute("data-id",doc.id);
    name.setAttribute("class","col-sm-3");
    b_date.setAttribute("data-id",doc.id);
    b_date.setAttribute("class","col-sm-3");
    f_date.setAttribute("data-id",doc.id);
    f_date.setAttribute("class","col-sm-3");
    module.setAttribute("data-id",doc.id);
    module.setAttribute("class","col-sm-3");
    del.setAttribute("class","del_button");

    name.textContent=doc.data().name;
    b_date.textContent=doc.data().began_date;
    f_date.textContent=doc.data().finale_date;
    module.textContent=doc.data().module;
    del.textContent="Delete";

    del.addEventListener("click",(event_obj_inf)=>{
        var data_id=event_obj_inf.target.parentElement.getAttribute("data-id");
        db.collection('pack').doc(data_id).delete();
    })


}

function seance_display(doc){

    var tag_=document.createElement('tr');
    var mod_name=document.createElement('th');
    var t_name=document.createElement('th');
    var date_h=document.createElement('th');
    var del=document.createElement("button");

    seance.appendChild(tag_)
    tag_.appendChild(mod_name);
    tag_.appendChild(t_name);
    tag_.appendChild(date_h);
    tag_.appendChild(del);

    tag_.setAttribute("class","row");
    tag_.setAttribute("id","tr_styling");
    tag_.setAttribute("data-id",doc.id);
    mod_name.setAttribute("data-id",doc.id);
    mod_name.setAttribute("class","col-sm-4");
    t_name.setAttribute("data-id",doc.id);
    t_name.setAttribute("class","col-sm-4");
    date_h.setAttribute("data-id",doc.id);
    date_h.setAttribute("class","col-sm-4");
    del.setAttribute("class","del_button");
    

    mod_name.textContent=doc.data().module_name;
    t_name.textContent=doc.data().teacher_name;
    date_h.textContent=doc.data().date_hour;
    del.textContent="Delete";

    del.addEventListener("click",(event_obj_inf)=>{
        var data_id=event_obj_inf.target.parentElement.getAttribute("data-id");
        db.collection('seance').doc(data_id).delete();
    })

}

function teachers_display(doc){
    var tag_=document.createElement('tr');
    var t_name=document.createElement('th');
    var mod_name=document.createElement('th');
    var del=document.createElement("button");

    teachers_tab.appendChild(tag_)
    tag_.appendChild(t_name);
    tag_.appendChild(mod_name);
    tag_.appendChild(del);

    tag_.setAttribute("class","row");
    tag_.setAttribute("id","tr_styling");
    tag_.setAttribute("data-id",doc.id);
    t_name.setAttribute("class","col-sm-6");
    mod_name.setAttribute("class","col-sm-6");
    del.setAttribute("class","del_button");
    

    t_name.setAttribute("data-id",doc.id);
    mod_name.setAttribute("data-id",doc.id);
    t_name.textContent=doc.data().name;
    mod_name.textContent=doc.data().module;
    del.textContent="Delete";

    del.addEventListener("click",(event_obj_inf)=>{
        var data_id=event_obj_inf.target.parentElement.getAttribute("data-id");
        db.collection('teachers').doc(data_id).delete();
    })
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

if (std_cli){ 
    std_cli.addEventListener("click",(e)=>{
    
    db.collection("students").add({
        name: std_adding.c_name.value,
        age: std_adding.age.value,
        level: std_adding.s_level.value,
        speciality: std_adding.specility.value,
    });
    std_adding.c_name.value = '';
    std_adding.age.value='';
    std_adding.s_level.value="";
    std_adding.specility.value="";
    console.log("succes");
});
}
else if(parental_button){
    console.log("fffff");
    parental_button.addEventListener("click",(e)=>{
    console.log("succes");
    db.collection('parental').add({
        name: parental_form.name.value,
        student: parental_form.student.value,
        tel: parental_form.tel.value,
        adress: parental_form.adress.value,
    });
    parental_form.name.value="";
    parental_form.student.value="";
    parental_form.tel.value="";
    parental_form.adress.value="";
});
}
else if(pack_button){
pack_button.addEventListener("click",(e)=>{
    db.collection('pack').add({
        name: pack_form.name.value,
        began_date: pack_form.began_date.value,
        finale_date: pack_form.final_date.value,
        module: pack_form.module.value,
    });
    pack_form.name.value = "";
    pack_form.began_date.value ="";
    pack_form.final_date.value ="";
    pack_form.module.value ="";
    console.log("succes");
});
}
else if(intresting_button){
intresting_button.addEventListener("click",(e)=>{
    db.collection('intresting').add({
        name:intresting_form.name.value,
        began_date:intresting_form.season.value,
    });
    intresting_form.name.value="";
    intresting_form.name.value="";
    console.log("succes");
    
});}

else if(seance_button){
seance_button.addEventListener("click",(e)=>{
    db.collection('seance').add({
        module_name:seance_form.module_name.value,
        teacher_name:seance_form.teacher_name.value,
        date_hour:seance_form.date_hour.value,
    });
    seance_form.module_name.value="";
    seance_form.techer_name.value="";
    seance_form.date_hour.value="";
    console.log("succes");
    
});}

else if(teachers_button){
teachers_button.addEventListener("click",(e)=>{
    db.collection('teachers').add({
        name:teachers_form.name.value,
        module:teachers_form.module.value,
    });
    teachers_form.name.value="";
    teachers_form.module.value="";
    console.log("succes");
    
});
}









