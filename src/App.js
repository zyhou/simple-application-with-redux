import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Header } from './components/Header';
import { NoMatch } from './components/NoMatch';
import Authentication from './authentication/Authentication';
import Home from './home/Home';
import Members from './members/Members';
import Talks from './talks/Talks';
import Wishes from './wishes/Wishes';

const Container = styled.div`
    text-align: center;
`;

export const App = ({ store, history }) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Container>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/talks" component={Talks} />
                    <Route path="/wishes" component={Wishes} />
                    <Route path="/members" component={Members} />
                    <Route path="/login" component={Authentication} />
                    <Route component={NoMatch} />
                </Switch>
            </Container>
        </ConnectedRouter>
    </Provider>
);

App.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};
