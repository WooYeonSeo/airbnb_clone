import styled from 'styled-components';
const cardview = { }

cardview.CardBox = styled.div`{
    border: 1px solid gray;
    border-radius: 2px;
    padding: 0.5rem;
    background-color: #fff;
    overflow:hidden;
    margin-top : 1.5rem;
    text-align:left;
}`;
cardview.CardLectBox = styled.div`{
    display: inline-block;
    width:30%;
    float:left;
}`;
cardview.CardRightBox = styled.div`{
    padding:1rem 1.5rem;
    position:relative;
    float:right;
    width:70%;
}`;

cardview.MainImg = styled.img`{
    width:100%;
}`;

cardview.CardTitle = styled.p`{
    font-size:1.5rem;
    font-weight:bold;
    padding-bottom:1rem;
}`;

cardview.CardDetailBox = styled.div`{
    font-size: 0.75rem;
    overflow:hidden;
}`;

cardview.CardDetailSpan = styled.span`{
    float:left;
    font-size: 0.75rem;
}`;

cardview.CardDetailFooterBox = styled.span`{
    float:left;
    font-size: 0.75rem;
}`;

cardview.Test = styled.span`{
    background:blue;
}`;

cardview.Anchor = styled(cardview.Test.withComponent('p'))`
    background:black;
` ;

export default cardview