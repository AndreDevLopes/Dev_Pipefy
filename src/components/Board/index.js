import React from 'react';
import {Container} from './style';
import List from '../List';
export default function Board() {
    return (
        <div>
            <Container>
            
                <List/>
                <List/>
                <List/>
                <List/>

            </Container>
        </div>
    )
}
