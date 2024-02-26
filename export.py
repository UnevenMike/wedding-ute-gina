import os
import pandas as pd
from sqlalchemy import create_engine
from dotenv import load_dotenv
from datetime import datetime

load_dotenv()


def export_csv(filename):
    postgres_url = os.getenv('POSTGRES_PY_URL')
    print(postgres_url)
    if postgres_url is None:
        raise ValueError('POSTGRES_PY_URL is not set')

    engine = create_engine(postgres_url)
    df = pd.read_sql_query('select * from public.wedding_rsvp', con=engine)
    df.to_csv(filename, index=False)


if __name__ == "__main__":
    export_csv(f'./wedding_rsvp_{datetime.now():%Y%m%d}.csv')
