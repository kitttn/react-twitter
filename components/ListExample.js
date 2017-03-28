import React, { Component } from 'react';
import { Container, Content, ListItem, Button, Text } from 'native-base';

export default class ListExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <ListItem>
                        <Text>Simon Mignolet</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Nathaniel Clyne</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Dejan Lovren</Text>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}
