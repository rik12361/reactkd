import React from 'react'
import { useState } from 'react'

const Addtasks = ( {addTask}) => {
    const  [text, setText ]= useState ('');
    const  [day, setDay ]=  useState ('');
    const  [reminder, setReminder ]=  useState (false);

    const fonsubmit = (e) => {
        e.preventDefault();

        if (text.length === 0) {
            alert ("please enter a text!");
            return;
        }

        if (!day) {
            alert ("please enter a day & time");
            return;
        }
        addTask (text, day, reminder);

        setText ('');
        setDay ('');
        setReminder (false);
    }

    return (
        <div>
        <form className='add-form' onSubmit={ fonsubmit } >
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder="Add text" value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Day & time</label>
                <input type="datetime-local" placeholder="Add day & time" value={ day } onChange={(e) => setDay(e.target.value)}></input>
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input type="checkbox" className="form-control-check" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
            </div>

            <input type="submit" value="Save task" className="btn-block btn" ></input>
            
        </form>
        </div>
    )
}

export default Addtasks
