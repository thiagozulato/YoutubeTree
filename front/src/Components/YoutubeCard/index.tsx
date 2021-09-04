import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

type YoutubeCardProps = {
  title: string;
  thumbnail: string;
  publishedAt: string;
  onSubscribe(): void;
};

const YoutubeCard = ({
  title,
  thumbnail,
  publishedAt,
  onSubscribe,
}: YoutubeCardProps) => {
  const styles = useStyles();

  return (
    <Card className={styles.root}>
      <CardMedia
        className={styles.media}
        image={thumbnail}
      />
      <CardContent className={styles.content}>
        <Typography gutterBottom variant="h6">
          {title}
        </Typography>
        <Typography gutterBottom variant="body2">
          {Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(new Date(publishedAt))}
        </Typography>
      </CardContent>
      <CardActions className={styles.actions}>
        <Button size="small" color="primary" onClick={onSubscribe}>
          Inscrever
        </Button>
      </CardActions>
    </Card>
  );
};

export default YoutubeCard;
