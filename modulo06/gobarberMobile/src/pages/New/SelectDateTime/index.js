import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import DateInput from '~/components/DateInput';
import Background from '~/components/Background';

import { Container, HourList, Hour, Title } from './styles';

export default function SelectDateTime({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const provider = navigation.getParam('provider');

  useEffect(() => {
    async function loadAvailable() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });

      setHours(response.data);
    }

    loadAvailable();
  }, [date, provider.id]);

  function handleSelectHour(time) {
    navigation.navigate('Confirm', {
      provider,
      time,
    });
  }
  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
      </Container>

      <HourList
        data={hours}
        keyExtractor={item => item.time}
        renderItem={({ item }) => (
          <Hour
            onPress={() => {
              handleSelectHour(item.value);
            }}
            enabled={item.avaiable} //available
          >
            <Title>{item.time}</Title>
          </Hour>
        )}
      />
    </Background>
  );
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o horário',
  header: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
