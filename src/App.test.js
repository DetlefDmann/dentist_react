import React, {useState} from 'react';
import { patientData } from "./patientList";
import addDentist from './App'

actualAppointments = [
            {day: 10, time: 15, patient: "Willeke Kuijpers", dentist: "Valentijn Gerritsen", assistant: "Leentje Wolters"},
             {day: 25, time: 14, patient: "Twan de Vos", dentist: "Floor van Veen", assistant: "Geert de Ruiter"},
     ];
    

const [state, setState] = useState({
    dentists:[{firstName:"Boris", lastName:"Ekkenbeul",phoneNr:"", eMail:"b.ekkenbeul@tandartspraktijkbvt.nl", skills:[], isSick:false},
              {firstName:"Anna", lastName:"Bolen", phoneNr:"", eMail:"a.bolen@tandartspraktijkbvt.nl", skills:[], isSick:false},
              {firstName:"Carla", lastName:"Snoepvingers", phoneNr:"", eMail:"c.snoepvingers@tandartspraktijkbvt.nl", skills:[], isSick:false},
              {firstName:"Pjotr", lastName:"Doelen", phoneNr:"", eMail:"p.doelen@tandartspraktijkbvt.nl", skills:[], isSick:false},
    ],
    assistants:[{firstName:"Gerrie",lastName:"Mansinck",phoneNr:"", eMail:"g.mansinck@tandartspraktijkbvt.nl", isSick:false},
                {firstName:"Sue",lastName:"Zhoupeng",phoneNr:"", eMail:"s.zhoupeng@tandartspraktijkbvt.nl", isSick:false}
    ],
    patients:patientData,
    appointments:actualAppointments
  });


describe("add dentist function" , () => {
    test("test the adding function" , ()=> {
        addDentist( state, "Piet", "Lul","13","kut");
        expect(state.dentists).toBe([{firstName:"Boris", lastName:"Ekkenbeul",phoneNr:"", eMail:"b.ekkenbeul@tandartspraktijkbvt.nl", skills:[], isSick:false},
                                        {firstName:"Anna", lastName:"Bolen", phoneNr:"", eMail:"a.bolen@tandartspraktijkbvt.nl", skills:[], isSick:false},
                                        {firstName:"Carla", lastName:"Snoepvingers", phoneNr:"", eMail:"c.snoepvingers@tandartspraktijkbvt.nl", skills:[], isSick:false},
                                        {firstName:"Pjotr", lastName:"Doelen", phoneNr:"", eMail:"p.doelen@tandartspraktijkbvt.nl", skills:[], isSick:false},
                                        {firstName:"Piet" , lastName:"Lul", phoneNr:"13", eMail:"kut"}
])
    })
})