import { makeStyles } from '@material-ui/core/styles';

export const sharedStyles = makeStyles(({spacing}) => ({
    headerTextContainer: {
        marginTop: spacing(3),
        marginBottom: spacing(3)
    },
    paperTextContainer: {
        marginLeft: spacing(3),
        marginRight: spacing(3),
        marginBottom: spacing(2),
        background: '#324a54'
    },
    headerText: {
        fontSize: '2.6em',
        fontWeight: 'bold',
        marginLeft: spacing(3),
        marginBottom: spacing(2),
        paddding: spacing(2),
        fontFamily: 'Quicksand, sans-serif'
    },
    paperText: {
        fontSize: '1.3em',
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        marginTop: spacing(1),
        padding: spacing(3),
        lineHeight: '45px'
    }
}));