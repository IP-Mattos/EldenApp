import { useEffect } from 'react';
// Redux
import { getBossDetail } from '../../redux/slices/Bosses';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function BossesDetail(){
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() =>{        
		dispatch(getBossDetail(id));
    }, [dispatch])

    const {detail : bdetail} = useSelector(state => state.bosses)
    console.log(bdetail)
}

export default BossesDetail;