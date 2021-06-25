import { log } from '@/tools/log';
import styles from './index.less';

const packageInfo: any = process.env.package;
log('message', '应用', packageInfo.name);
log('info', '版本', packageInfo.version);
log('info', '环境', process.env.NODE_ENV);

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page Home</h1>
    </div>
  );
}
