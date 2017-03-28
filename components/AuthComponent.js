/* @flow */

import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Button, Text} from 'native-base';

export default class FormExample extends Component {

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Username" />
                        </Item>
                        <Item last>
                            <Input placeholder="Password" />
                        </Item>
                        <Button bordered>
                            <Text>Login</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}
