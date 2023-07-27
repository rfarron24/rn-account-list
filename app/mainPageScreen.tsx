import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native'
import { ListComponent } from './components/listComponent'
import { Api } from './utils/api'
import Modal from 'react-native-modal'
import { styles } from './style';

export interface MainPageState {
    listOfData?: any,
    showModal: boolean,
    detailsData?: any
}

export class MainPageScreen extends React.Component<MainPageState>  {
    showModal = false
    constructor(props) {
        super(props);
        this.state = {
            listOfData: '',
            showModal: false,
            detailsData: {}
        }
    }

    componentDidMount() {
        const api = new Api()
        const dataResponse = api.getSchooDatas()
        this.setState({
            listOfData: dataResponse
        })
    }

    onShowModal = (value) => {
        this.setState({
            showModal: value
        })
    }

    getDetailsData = (detailsData) => {
        this.setState({
            detailsData
        })
    }

    render() {
        const details = this.state.detailsData
        return (
            <ScrollView style={styles.containerFlex}>
                <ListComponent
                    data={this.state.listOfData}
                    showModal={(value) => { this.onShowModal(value) }}
                    detailsData={(value) => { this.getDetailsData(value) }}
                ></ListComponent>
                <Modal isVisible={this.state.showModal}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.textStyle}>{`SCHOOL BUILDING : ${details.building_code}`}</Text>
                        <Text style={styles.textStyle}>{`SCHOOL ZIP : ${details.zip}`}</Text>
                        <Text style={styles.textStyle}>{`SCHOOL PHONE : ${details.phone}`}</Text>
                    </View>
                    <Button
                        title="Close Modal"
                        onPress={() => { this.onShowModal(false) }}
                    />
                </Modal>
            </ScrollView>
        )
    }

}

export default MainPageScreen;