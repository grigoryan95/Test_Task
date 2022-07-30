import Box from '@mui/material/Box';
import { createEditor } from 'slate';
import { Redirect } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { HeaderSection } from '../../section';
import { useAuth } from '../../hooks/use-auth';
import { DefaultElement } from '../../component';
import { Slate, Editable, withReact } from 'slate-react';
import { defaultsValueSlate } from '../../mock-data/initialStateSlate';

export const HomePage = () => {
    const {isAuth} = useAuth();
    const [editor] = useState(() => withReact(createEditor()));
    const renderElement = useCallback(props => <DefaultElement {...props} />, []);
    const initialState = JSON.parse(localStorage.getItem('content')) || defaultsValueSlate;
    const setLocalStorage = value => {
        const isAstChange = editor.operations.some(
            op => 'set_selection' !== op.type
        );
        if (isAstChange) {
            const content = JSON.stringify(value);
            localStorage.setItem('content', content)
        }
    };

    return (
        isAuth || localStorage.getItem('token') ? (
            <Box>
                <HeaderSection/>
                <Slate
                    editor={editor}
                    value={initialState}
                    key={JSON.stringify(initialState)}
                    onChange={value => setLocalStorage(value)}
                >
                    <Editable renderElement={renderElement}/>
                </Slate>
            </Box>
        ) : (
            <Redirect to="/login"/>
        )
    );
};

