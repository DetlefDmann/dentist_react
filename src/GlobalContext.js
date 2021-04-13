import React, {useState, createContext} from 'react'
import { patientData } from "./components/patientList";
import { appointments } from "./components/appointmentsList";


export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [state, setState] = useState({
        dentists:[{firstName:"Boris", lastName:"Ekkenbeul",phoneNr:"", eMail:"b.ekkenbeul@tandartspraktijkbvt.nl", skills:[], isSick:false, id:"001"},
                  {firstName:"Anna", lastName:"Bolen", phoneNr:"", eMail:"a.bolen@tandartspraktijkbvt.nl", skills:[], isSick:false, id:"002"},
                  {firstName:"Carla", lastName:"Snoepvingers", phoneNr:"", eMail:"c.snoepvingers@tandartspraktijkbvt.nl", skills:[], isSick:false, id:"003"},
                  {firstName:"Pjotr", lastName:"Doelen", phoneNr:"", eMail:"p.doelen@tandartspraktijkbvt.nl", skills:[], isSick:false, id:"004"},
        ],
        assistants:[{firstName:"Gerrie",lastName:"Mansinck",phoneNr:"", eMail:"g.mansinck@tandartspraktijkbvt.nl", isSick:false, id:"011"},
                    {firstName:"Sue",lastName:"Zhoupeng",phoneNr:"", eMail:"s.zhoupeng@tandartspraktijkbvt.nl", isSick:false, id:"012"}
        ],
        patients:patientData,
        appointments:appointments,
        selectedDay:1
    });
    return (
        <GlobalContext.Provider value={[state, setState]}>
            {props.children}
        </GlobalContext.Provider>
    )
}


