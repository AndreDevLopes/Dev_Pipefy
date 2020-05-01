import React from 'react';
import {Container} from './style';
import {MdAdd} from 'react-icons/md';
import Card from '../Card';

export default function List() {
    return (
        <div>
            <Container>
                <header>
                    <h2>Tarefas</h2>
                    <button type="button">
                        <MdAdd  size ={24} color="#fff"/>
                    </button>
                </header>
                <ul>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </ul>
            </Container>

        </div>
    )
}
